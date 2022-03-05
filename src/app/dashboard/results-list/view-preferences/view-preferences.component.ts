import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-preferences',
  templateUrl: './view-preferences.component.html',
  styleUrls: ['./view-preferences.component.css']
})
export class ViewPreferencesComponent implements OnInit {
  @Input() countries: String[] = [];
  @Input() providers: String[] = [];

  @Output() toggleResultsWithProperty = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Hello World')
  }

  stopPropagation(event: any) {
    event.stopPropagation()
  }

  //on toggling checkbox
  change(propertyLabel: any, $event: any) {
    console.log(propertyLabel);
    this.toggleResultsWithProperty.emit(propertyLabel);
  }
}
