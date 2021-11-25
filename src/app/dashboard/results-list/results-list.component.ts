import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results = ['Saving Private Ryan', 'Fury', 'Dunkirk'];

  constructor() { }

  ngOnInit(): void {
  }

}
