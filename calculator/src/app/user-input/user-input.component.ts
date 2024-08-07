import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentCalculatorService } from '../investment-calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = signal('1000');
  enteredExpectedReturn = signal('10');
  enteredDuration = signal('5');
  enteredAnnualInvestment = signal('100');

  investmentCalculatorService: InvestmentCalculatorService = inject(InvestmentCalculatorService);

  onSubmit() {
    const data ={
      initialInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment() 
    };

    this.investmentCalculatorService.calculateInvestmentResults(data);

  }

}
