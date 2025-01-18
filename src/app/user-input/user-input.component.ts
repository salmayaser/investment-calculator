import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentsService } from '../shared/services/investments.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private investmentsService = inject(InvestmentsService);

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.investmentsService.calculateInvestmentResults(
      +this.initialInvestment,
      +this.annualInvestment,
      +this.duration,
      +this.expectedReturn
    );
  }
}
