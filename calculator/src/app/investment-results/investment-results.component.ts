import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculatorService } from '../investment-calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  investmentCalculatorService: InvestmentCalculatorService = inject(InvestmentCalculatorService);

  results = this.investmentCalculatorService.resultsData.asReadonly();

}
