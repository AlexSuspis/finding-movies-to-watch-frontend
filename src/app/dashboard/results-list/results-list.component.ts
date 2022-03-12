import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() results: Result[] = [];
  @Input() displayedResults: Result[] = [];

  hiddenResults: Result[] = [];
  countries: string[] = [];
  providers: string[] = [];

  @Output() removeElementWithIndex = new EventEmitter<Number>();

  constructor() {
    this.displayedResults = this.results
  }
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

  filterResults($event: any) {

    console.log("in onToggleResultsWithValue() !!!!")
    let { property, key } = $event;
    // console.log(property)
    if (property === 'reset') {
      // console.log("Property is 'reset'")
      this.displayedResults = this.results;
      return
    }

    let indicesToRemain: number[] = [];
    this.results.forEach(result => {
      //key,value
      //countries: ['UK', 'US']
      let indexToRemove: number = this.results.indexOf(result)
      Object.entries(result).forEach(([key, value]) => {
        if (value.includes(property)) {
          indicesToRemain.push(indexToRemove);
          // console.log(result['name'], indexToRemove)
          // this.hiddenResults.push(result);
        }
      })
    })

    // if (this.displayedResults.length == this.results.length) {
    this.displayedResults = this.results.filter(result => indicesToRemain.includes(this.results.indexOf(result)));
    // } else
    //   this.displayedResults = this.displayedResults.filter(result => indicesToRemain.includes(this.displayedResults.indexOf(result)));
  }
}
