import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render an HTML result element when a new result is pushed onto the results list', () => { });
  it('should hide the HTML results element when this same element is deleted from the results list', () => { });

  it('should render ')

});
