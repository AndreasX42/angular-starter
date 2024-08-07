import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputData } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';
  enteredAnnualInvestment = '0';

  @Output() calculate = new EventEmitter<InvestmentInputData>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment 
    });

  }

}
