import { Component, inject, signal } from '@angular/core';
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

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    this.investmentsService.calculateInvestmentResults(
      +this.initialInvestment(),
      +this.annualInvestment(),
      +this.duration(),
      +this.expectedReturn()
    );
    this.resetInputs();
  }

  resetInputs() {
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
