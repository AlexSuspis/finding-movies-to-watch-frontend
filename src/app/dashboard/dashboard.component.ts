import { Component, OnInit } from '@angular/core';
import { Result, mock_results } from './results-list/result.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recommendationResults: Result[] = [];
  noResults = false;

  results: Result[] = [];
  // results: Result[] = mock_results;

  constructor() { }

  ngOnInit(): void {
  }

  onRecommendationsReceived(newResults: Result[]) {
    this.results.push(...newResults)
    // this.recommendationResults = results
  }
  onResultsReceived(results: Result[]) {
    this.noResults = false;
    if (results.length == 0) {
      this.results = [];
      // this.queryResults = [];
    } else
      // console.log(results)
      this.results = results
    // this.queryResults = results
  }

  onInputEmptied() {
    this.noResults = true;
    // console.log('renderRecommendations set to true');
  }

  removeElementWithIndex(index: any) {
    // console.log(index)
    this.results.splice(index);
  }
}
