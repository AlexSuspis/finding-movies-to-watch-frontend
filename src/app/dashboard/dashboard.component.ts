import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  query_results = [];

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveQueryResults(results: any) {
    if (results.length == 0) {
      this.query_results = [];
    } else
      console.log(results)
    this.query_results = results
  }
}
