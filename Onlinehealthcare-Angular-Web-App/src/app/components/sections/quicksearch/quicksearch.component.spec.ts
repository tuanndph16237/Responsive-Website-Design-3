import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksearchComponent } from './quicksearch.component';

describe('QuicksearchComponent', () => {
  let component: QuicksearchComponent;
  let fixture: ComponentFixture<QuicksearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuicksearchComponent]
    });
    fixture = TestBed.createComponent(QuicksearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
