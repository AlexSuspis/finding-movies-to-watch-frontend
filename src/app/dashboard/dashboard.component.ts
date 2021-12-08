import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  queryResults = [];
  renderRecommendations = true;
  noQueryResults = false;

  constructor() { }

  ngOnInit(): void {
  }

  onResultsReceived(results: any) {
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
