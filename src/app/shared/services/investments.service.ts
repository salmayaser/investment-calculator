import { Injectable, signal } from '@angular/core';
import { Investment } from '../interfaces/investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  private annualInvestments = signal<Investment[]>([]);
  calculateInvestmentResults(
    initialInvestment: number,
    annualInvestment: number,
    duration: number,
    expectedReturn: number
  ) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualInvestments.set(annualData);
  }
}
