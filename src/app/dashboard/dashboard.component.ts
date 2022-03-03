import { Component, OnInit } from '@angular/core';
import { Result, mock_results } from './results-list/result.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  queryResults: Result[] = []
  // queryResults: Result[] = mock_results; //CHANGE BACK TO [] AFTER
  recommendationResults: Result[] = [];
  renderRecommendations = false;
  noQueryResults = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRecommendationsReceived(results: Result[]) {
    this.recommendationResults = results
  }
  onResultsReceived(results: Result[]) {
    this.renderRecommendations = false;
    if (results.length == 0) {
      this.queryResults = [];
    } else
      // console.log(results)
      this.queryResults = results
  }

  onInputEmptied() {
    this.renderRecommendations = true;
    console.log('renderRecommendations set to true');
  }
}
