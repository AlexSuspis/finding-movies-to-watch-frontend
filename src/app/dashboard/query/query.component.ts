import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    let query = event.target.value;
    console.log(query);
  }
}
