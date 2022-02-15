import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComponent } from './query.component';

describe('QueryComponent', () => {
  let component: QueryComponent;
  let fixture: ComponentFixture<QueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('First time using app, no previous searches', () => {
  //   it('should perform an API call to GET /recommendations to get a set of recommended movies and populate results-list with them', () => { })
  // })
  describe('Each time user changes the text in input element', () => {
    //we can send an api request everytime there is an input trigger, but this results in too many 

  });

  describe('When a non-empty set of results is received from /GET results', () => {
    it('should delete all results currently stored in the results list in results-list component', () => { });
    it('should push the received query results onto a results list in results-list component', () => { });
    it('should then call GET /recommendations/:movieId', () => { })
  });

  describe('When an empty set of results is received from /GET matches/:query', () => {
    it('display "Query not found" message in results-list component', () => { })
  })
});
