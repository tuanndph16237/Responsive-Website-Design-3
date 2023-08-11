import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthpakagesComponent } from './healthpakages.component';

describe('HealthpakagesComponent', () => {
  let component: HealthpakagesComponent;
  let fixture: ComponentFixture<HealthpakagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthpakagesComponent]
    });
    fixture = TestBed.createComponent(HealthpakagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
