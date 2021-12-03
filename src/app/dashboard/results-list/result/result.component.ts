import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() name = '';

  constructor(result: Result) {

  }

  ngOnInit(): void {
  }

}
