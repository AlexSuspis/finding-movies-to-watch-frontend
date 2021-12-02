import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreferencesComponent } from './view-preferences.component';

describe('ViewPreferencesComponent', () => {
  let component: ViewPreferencesComponent;
  let fixture: ComponentFixture<ViewPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPreferencesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user clicks "Sort by Name"', () => {
    it('should trigger a sortResultsbyName() event', () => { });
    it('should send an API call to /POST /user/sortPreferences', () => { });

    it('should display the HTML results elements ordered by their name');
  });
});
