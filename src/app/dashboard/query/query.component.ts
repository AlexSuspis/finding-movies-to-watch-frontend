import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { mock_results } from '../results-list/result.model';
import { Result } from '../results-list/result.model';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  mock_results = mock_results;
  @Output() resultsReceivedEvent = new EventEmitter<Result[]>();
  @Output() inputEmptiedEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async onInputChange(event: any) {

    let query = event.target.value;
    if (!query) {
      console.log('empty query')
      this.inputEmptiedEvent.emit();
      return
    } else {
      console.log(query)

      let results: Result[] = [];

      let url = `http://127.0.0.1:8080/matches/${event.target.value}`;
      await this.http.get(url, { responseType: 'text' })
        .subscribe(data => {
          // console.log(data);
          results = [];
          let movies_json = JSON.parse(data)
          console.log(movies_json)
          for (let movie_json of movies_json) {
            // console.log(movie_json['title'])
            let result = new Result(movie_json['title'], movie_json['countries'], 'Test Description', movie_json['providers']);
            results.push(result)
            // console.log(movie_json)
          }
          console.log(results)
          this.resultsReceivedEvent.emit(results)
        }, err => console.log("Error:", err))

      // //mock case for when no results are found with given query
      // if (query.length > 5) {
      //   this.resultsReceivedEvent.emit([]);
      //   return
      // }

      // let result1 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      // let result2 = this.mock_results[Math.floor(Math.random() * this.mock_results.length)]
      // let results = [result1, result2]

    }

    //API call GET /results_from_query

    //push received results onto results-list 
  }
}
