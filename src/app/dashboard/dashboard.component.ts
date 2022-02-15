import { Component, OnInit } from '@angular/core';
import { Result } from './results-list/result.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  queryResults: Result[] = [];
  recommendationResults: Result[] = [];
  renderRecommendations = true;
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
