import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { mock_results } from '../results-list/result.model';
import { Result } from '../results-list/result.model';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements AfterViewInit {
  mock_results = mock_results;
  @Output() resultsReceivedEvent = new EventEmitter<Result[]>();
  @Output() recommendationsReceivedEvent = new EventEmitter<Result[]>();
  @Output() inputEmptiedEvent = new EventEmitter();

  @ViewChild('search') input!: ElementRef;

  apiURL;

  //Inspired from:
  //https://fireflysemantics.medium.com/debouncing-your-angular-search-field-ce6686cf54b3
  //https://medium.com/aviabird/angular-2-the-new-craze-of-observables-operators-e2b9dcb9330a
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'input')
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
      ).subscribe((event: any) => this.onInputChange(event))
  }

  constructor(private http: HttpClient) {
    this.apiURL = environment.apiURL;
  }

  ngOnInit(): void { }

  async onInputChange(event: any) {

    let query = event.target.value;
    if (!query) {
      // console.log('empty query')
      this.inputEmptiedEvent.emit();
      return
    } else {

      let recommendations: Result[] = [];
      let results: Result[] = [];

      try {
        let query_matching_url = this.apiURL + `/matches/${event.target.value}`;
        console.log("Sending query " + query + " to: " + query_matching_url)

        this.http.get(query_matching_url, { responseType: 'text' })
          .subscribe(
            moviesJSON => {
              let movies = JSON.parse(moviesJSON)
              // console.log(movies)

              results.push(...renderResults(movies));
              this.resultsReceivedEvent.emit(results)
              // console.log('Results received event emitted!')
              this.recommendationsReceivedEvent.emit([])

              let movieIds = movies.map((movie: any) => movie.movieId)
              // console.log(movieIds)

              let recommendations_url = this.apiURL + `/recommendations/${JSON.stringify(movieIds)}`;
              // let recommendations_url = `http://127.0.0.1:8080/recommendations/${movieId_for_recommendation}/${movies.length}`;

              this.http.get(recommendations_url, { responseType: 'text' })
                .subscribe(moviesJSON => {
                  let movies = JSON.parse(moviesJSON)
                  // console.log(movies)
                  recommendations.push(...renderResults(movies));
                  // console.log('recommendations')
                  // console.log(recommendations)
                  this.recommendationsReceivedEvent.emit(recommendations)
                  // console.log('Recommendations received event emitted!')
                });
            },
            error => {
              this.inputEmptiedEvent.emit();
              console.log("error!: ", error)
            })

      } catch (err) {
        this.inputEmptiedEvent.emit();
        console.log("error!: ", err)
      }
    }

    function renderResults(movies: []) {
      let results: Result[] = [];
      // console.log(movies)
      for (let movie of movies) {
        let result = new Result(movie['title'], movie['countries'], 'Test Description', movie['providers'], movie['country_flag_urls'], movie['provider_icon_urls']);
        results.push(result)
      }
      return results
    }
  }
}
