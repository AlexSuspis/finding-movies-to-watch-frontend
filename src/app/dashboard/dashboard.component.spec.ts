import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When this module is first loaded', () => {
    it('should call /GET user/:id/preferences to retrieve all user preferences stored on the system', () => { });
    it('should push the query preferences onto the query_preferences list in query component', () => { });
    it('should push the view and sort preferences onto the preferences list in results-list component', () => { });
  });

  it('should display the application\'s logo', () => { });
  it('should display a Welcome, {{username}} H1 tag', () => { });
  it('should contain a user-account component', () => { });
  it('should have a query component', () => { });
  it('should have a results-list component', () => { });
});