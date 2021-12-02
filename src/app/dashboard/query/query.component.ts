import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  mock_received_results = [
    'Boy in the striped pyjamas',
    'Pulp Fiction',
    'La vie est Belle',
    'Shawshank Redemption',
    'The Godfather',
    'Queen\'s Gambit'
  ]
  @Output() resultsReceivedEvent = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    let query = event.target.value;
    console.log(query);

    let random_mock_result1 = this.mock_received_results[Math.floor(Math.random() * this.mock_received_results.length)]
    let random_mock_result2 = this.mock_received_results[Math.floor(Math.random() * this.mock_received_results.length)]
    let results = [random_mock_result1, random_mock_result2]
    this.resultsReceivedEvent.emit(results)


    //API call GET /results_from_query

    //push received results onto results-list 
  }
}
