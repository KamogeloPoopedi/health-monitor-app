import { Component } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-risk-predictor',
  templateUrl: './risk-predictor.component.html',
  styleUrls: ['./risk-predictor.component.css']
})
export class RiskPredictorComponent {
  age!: number;
  bmi!: number;
  blood_pressure!: number;
  risk!: string;
  risk_score!: number;

  constructor(private predictionService: PredictionService) {}

  onSubmit() {
    const inputData = { age: this.age, bmi: this.bmi, blood_pressure: this.blood_pressure };
    this.predictionService.predictRisk(inputData).subscribe(response => {
      this.risk = response.risk;
      this.risk_score = response.risk_score;
    });
  }
}
