import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPreferencesComponent } from './query-preferences.component';

describe('QueryPreferencesComponent', () => {
  let component: QueryPreferencesComponent;
  let fixture: ComponentFixture<QueryPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
