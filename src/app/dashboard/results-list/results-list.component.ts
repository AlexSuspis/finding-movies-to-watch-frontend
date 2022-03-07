import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() results: Result[] = [];
  hiddenResults: Result[] = [];

  @Output() removeElementWithIndex = new EventEmitter<Number>();

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

  onToggleResultsWithValue($event: any) {
    console.log("in onToggleResultsWithValue() !!!!")
    let { property, key } = $event;
    let checked = $event.originalTarget.checked;
    console.log(key, property, checked)

    let indicesToRemove: number[] = [];
    this.results.forEach(result => {
      //key,value
      //countries: ['UK', 'US']
      let indexToRemove: number = this.results.indexOf(result)
      Object.entries(result).forEach(([key, value]) => {
        if (value.includes(property)) {
          // console.log(this.results)
          indicesToRemove.push(indexToRemove);
          console.log(result['name'], indexToRemove)
          // this.hiddenResults.push(result);
          // console.log(this.results)
          console.log(result['name'], indexToRemove)
          console.log(this.results)
        }
      })
      // this.results.splice(indexToRemove, 1)
    })
    this.results = this.results.filter(result => indicesToRemove.includes(this.results.indexOf(result)));
    // console.log(indicesToRemove)
    // for (let i = 0; i < indicesToRemove.length; i++) {
    //   this.results.splice(i, 1)
    // }
    // console.log(this.results)

    // this.results.forEach(result => {
    //   //check if property value is in key
    //   if (result[key as keyof typeof Array].includes(property) {
    //     console.log(result['name'] + " has property " + property)
    //   }
    // })

    //if checkbox is not checked (it was unchecked)
    //we want to add stuff back


    // console.log(property)
  }
}
