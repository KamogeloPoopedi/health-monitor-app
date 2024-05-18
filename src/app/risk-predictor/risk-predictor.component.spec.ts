import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPredictorComponent } from './risk-predictor.component';

describe('RiskPredictorComponent', () => {
  let component: RiskPredictorComponent;
  let fixture: ComponentFixture<RiskPredictorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskPredictorComponent]
    });
    fixture = TestBed.createComponent(RiskPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
