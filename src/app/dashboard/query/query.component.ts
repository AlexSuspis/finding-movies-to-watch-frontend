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
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    let query = event.target.value;
    if (!query) {
      console.log('<no query>')
      this.resultsReceivedEvent.emit([]);
      return
    } else {
      console.log(query)

      let result1 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      let result2 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      let results = [result1, result2]
      this.resultsReceivedEvent.emit(results)
    }

    //API call GET /results_from_query

    //push received results onto results-list 
  }
}
