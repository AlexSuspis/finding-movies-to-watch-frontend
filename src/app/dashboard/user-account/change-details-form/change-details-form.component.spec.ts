import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetailsFormComponent } from './change-details-form.component';

describe('ChangeDetailsFormComponent', () => {
  let component: ChangeDetailsFormComponent;
  let fixture: ComponentFixture<ChangeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
