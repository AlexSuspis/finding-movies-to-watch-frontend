import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-preferences',
  templateUrl: './view-preferences.component.html',
  styleUrls: ['./view-preferences.component.css']
})
export class ViewPreferencesComponent implements OnInit {
  @Input() countries: String[] = [];
  @Input() providers: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Hello World')
  }

}
