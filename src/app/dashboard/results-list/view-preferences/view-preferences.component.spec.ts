import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreferencesComponent } from './view-preferences.component';

describe('ViewPreferencesComponent', () => {
  let component: ViewPreferencesComponent;
  let fixture: ComponentFixture<ViewPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPreferencesComponent ]
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
});
