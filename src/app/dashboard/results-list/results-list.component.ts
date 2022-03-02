import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() results: Result[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSetOfCountries() {
    var allCountries: String[] = [];
    this.results.forEach(result => allCountries.push(...result['countries']));
    let setOfCountries: Set<String> = new Set(allCountries);

    return Array.from(setOfCountries)
  }
  getSetOfProviders() {
    let allProviders: String[] = [];
    this.results.forEach(result => allProviders.push(...result['streamingProviders']));
    let setOfProviders: Set<String> = new Set(allProviders);

    return Array.from(setOfProviders);
  }
}
