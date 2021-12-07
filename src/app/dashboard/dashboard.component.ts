import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  query_results = [];
  firstRender = true;

  constructor() { }

  ngOnInit(): void {
  }

  onResultsReceived(results: any) {
    if (results.length == 0) {
      this.query_results = [];
    } else
      console.log(results)
    this.query_results = results
  }
}
