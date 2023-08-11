import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookanappointmentComponent } from './bookanappointment.component';

describe('BookanappointmentComponent', () => {
  let component: BookanappointmentComponent;
  let fixture: ComponentFixture<BookanappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookanappointmentComponent]
    });
    fixture = TestBed.createComponent(BookanappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
