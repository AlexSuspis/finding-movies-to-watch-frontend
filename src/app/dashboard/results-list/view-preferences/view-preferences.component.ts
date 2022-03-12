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
  activeLiNumber: Number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(propertyLabel: any, $event: any, liNumber: any) {
    // console.log(propertyLabel)
    // console.log($event)
    // console.log(this.activeLiNumber)
    if (propertyLabel == 'reset') {
      this.isFilterActive = false;
      $event.property = propertyLabel;
      //set the class of all elements inside .dropdown-menu to .dropdown-item
    }
    else {
      this.isFilterActive = true;
      $event.property = propertyLabel;
      // console.log($event)
      //set the class of element to .dropdown-item active
    }
    this.activeLiNumber = liNumber
    // console.log(this.activeLiNumber)
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
