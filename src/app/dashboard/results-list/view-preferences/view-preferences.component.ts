import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-view-preferences',
  templateUrl: './view-preferences.component.html',
  styleUrls: ['./view-preferences.component.css']
})
export class ViewPreferencesComponent implements OnInit {
  @Input() countries: String[] = [];
  @Input() providers: String[] = [];

  @Output() filterResultsEvent = new EventEmitter();
  isFilterActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(propertyLabel: any, $event: any) {
    console.log(propertyLabel)
    if (propertyLabel == 'reset') {
      this.isFilterActive = false;
      $event.property = propertyLabel;
    }
    else {
      this.isFilterActive = true;
      $event.property = propertyLabel;
      console.log($event)
    }
    this.filterResultsEvent.emit($event);
  }

  stopPropagation(event: any) {
    event.stopPropagation()
  }

  //on toggling checkbox
  change(key: any, propertyLabel: any, $event: any) {
    // console.log(propertyLabel);
    // console.log($event)
    $event.property = propertyLabel
    $event.key = key;
    this.filterResultsEvent.emit($event);
  }
}
