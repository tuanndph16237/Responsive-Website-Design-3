import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturelinksComponent } from './featurelinks.component';

describe('FeaturelinksComponent', () => {
  let component: FeaturelinksComponent;
  let fixture: ComponentFixture<FeaturelinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturelinksComponent]
    });
    fixture = TestBed.createComponent(FeaturelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
