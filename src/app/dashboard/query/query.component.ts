import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { mock_results } from '../results-list/result.model';
import { Result } from '../results-list/result.model';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  async onInputChange(event: any) {

    let query = event.target.value;
    if (!query) {
      console.log('empty query')
      this.inputEmptiedEvent.emit();
      return
    } else {
      console.log(query)

      let recommendations: Result[] = [];
      let results: Result[] = [];

      try {
        let query_matching_url = `http://127.0.0.1:8080/matches/${event.target.value}`;
        this.http.get(query_matching_url, { responseType: 'text' })
          .subscribe(moviesJSON => {
            let movies = JSON.parse(moviesJSON)
            console.log(movies)

            results.push(...renderResults(movies));
            this.resultsReceivedEvent.emit(results)
            console.log('Results received event emitted!')
            this.recommendationsReceivedEvent.emit([])

            let movieId_for_recommendation: Number = movies[0].movieId;
            let movieIds = movies.map((movie: any) => movie.movieId)
            console.log(movieIds)

            let recommendations_url = `http://127.0.0.1:8080/recommendations/${JSON.stringify(movieIds)}`;
            // let recommendations_url = `http://127.0.0.1:8080/recommendations/${movieId_for_recommendation}/${movies.length}`;

            this.http.get(recommendations_url, { responseType: 'text' })
              .subscribe(moviesJSON => {
                let movies = JSON.parse(moviesJSON)
                console.log(movies)
                recommendations.push(...renderResults(movies));
                console.log('recommendations')
                console.log(recommendations)
                this.recommendationsReceivedEvent.emit(recommendations)
                console.log('Recommendations received event emitted!')
              });
          })

      } catch (err) {
        console.log("error!: ", err)
      }
    }

    function renderResults(movies: []) {
      let results: Result[] = [];
      console.log(movies)
      for (let movie of movies) {
        let result = new Result(movie['title'], movie['countries'], 'Test Description', movie['providers']);
        results.push(result)
      }
      return results
    }
  }
}
