import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() results: Result[] = [];
  hiddenResults: Result[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSetOfCountries() {
    var allCountries: String[] = [];
    this.results.forEach(result => allCountries.push(...result['countries']));
    let setOfCountries: Set<String> = new Set(allCountries);

    return Array.from(setOfCountries)
  }
  getSetOfProviders() {
    let allProviders: String[] = [];
    this.results.forEach(result => allProviders.push(...result['streamingProviders']));
    let setOfProviders: Set<String> = new Set(allProviders);

    return Array.from(setOfProviders);
  }

  onToggleResultsWithValue(property: any) {
    console.log("in onToggleResultsWithValue() !!!!")
    for (let result of this.results) {
      for (let [key, value] of Object.entries(result)) {
        if (value.includes(property)) {
          console.log("Result " + result['name'] + " has property " + property);
          this.hiddenResults.push(result);
          this.results.shift();
        }
      }
      // Object.keys(result).forEach((property) => {
      //   if (result.property.includes(value)) {
      //     console.log(result + " has value " + value);
      //   }

      // for (let property in result) {
      //   if (property.includes(value)) {
      //     console.log(result + " has value " + value);
      //   }
      // }
    }
  }


}
