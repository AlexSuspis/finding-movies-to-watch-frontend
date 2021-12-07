import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { mock_results } from '../results-list/result.model';
import { Result } from '../results-list/result.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  mock_results = mock_results;
  @Output() resultsReceivedEvent = new EventEmitter<Result[]>();
  @Output() noResultsReceivedEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    let query = event.target.value;
    if (!query) {
      console.log('empty query')
      this.resultsReceivedEvent.emit([]);
      return
    } else {
      console.log(query)

      //mock case for when no results are found with given query
      if (query.length > 5) {
        this.noResultsReceivedEvent.emit();
        return
      }

      let result1 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      let result2 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      let results = [result1, result2]
      this.resultsReceivedEvent.emit(results)
    }

    //API call GET /results_from_query

    //push received results onto results-list 
  }
}
