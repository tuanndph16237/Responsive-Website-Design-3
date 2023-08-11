import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GototopComponent } from './gototop.component';

describe('GototopComponent', () => {
  let component: GototopComponent;
  let fixture: ComponentFixture<GototopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GototopComponent]
    });
    fixture = TestBed.createComponent(GototopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
