import { Component, computed, inject } from '@angular/core';
import { InvestmentsService } from '../shared/services/investments.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investments-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-table.component.html',
  styleUrl: './investments-table.component.css',
})
export class InvestmentsTableComponent {
  investmentsService = inject(InvestmentsService);
  investments = computed(() => this.investmentsService.annualInvestments());
}
