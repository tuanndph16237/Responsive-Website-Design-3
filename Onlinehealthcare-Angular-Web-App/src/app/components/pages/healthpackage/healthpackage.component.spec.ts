import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthpackageComponent } from './healthpackage.component';

describe('HealthpackageComponent', () => {
  let component: HealthpackageComponent;
  let fixture: ComponentFixture<HealthpackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthpackageComponent]
    });
    fixture = TestBed.createComponent(HealthpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
