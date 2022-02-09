import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { mock_results } from '../results-list/result.model';
import { Result } from '../results-list/result.model';
import { lastValueFrom } from 'rxjs';


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
      // let movieId_for_recommendation: Number;

      try {
        //fetch movieIds matching query
        let query_matching_url = `http://127.0.0.1:8080/matches/${event.target.value}`;
        await lastValueFrom(this.http.get(query_matching_url, { responseType: 'text' }))
          .then(movie_data => {
            let movies = JSON.parse(movie_data)
            results.push(...renderResults(movies))
            // console.log(results)
            this.resultsReceivedEvent.emit(results)
            let movieId_for_recommendation: Number = movies[0].movieId;
            return movieId_for_recommendation

          }).then(async movieId => {
            console.log(movieId)
            let recommendations_url = `http://127.0.0.1:8080/recommendations/${movieId}`;
            await lastValueFrom(this.http.get(recommendations_url, { responseType: 'text' }))
              .then(data => {
                let recommended_movies = JSON.parse(data)
                results.push(...renderResults(recommended_movies))
                this.resultsReceivedEvent.emit(results)
              })
          })
          .catch(err => console.log('err!: ', err))

        console.log(results)

        console.log('Resulst received event emitted!')
      } catch (err) {
        console.log("error!: ", err)
      }


      // let query_matching_url = `http://127.0.0.1:8080/matches/${event.target.value}`;
      // // let url = `http://127.0.0.1:8080/recommendations/2640`;
      // await this.http.get(query_matching_url, { responseType: 'text' })
      //   .subscribe(data => {
      //     let movie_objects = JSON.parse(data)
      //     console.log(movie_objects)

      //     let results: Result[] = []
      //     results = renderResults(movie_objects);
      //     console.log(results)
      //     this.resultsReceivedEvent.emit(results)


      //   }, err => console.log("Error:", err))

      // let recommedations_url = `http://127.0.0.1:8080/recommendations/${movies_json[0].movieId}`;
      // await this.http.get(recommedations_url, { responseType: 'text' })
      //   .subscribe(data => {

      //   })


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
    //API call GET /results_from_query

    //push received results onto results-list 
  }
}
