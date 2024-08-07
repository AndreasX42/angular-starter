import { Injectable, signal } from "@angular/core";
import { InvestmentResultYear } from "./investment-result.model";
import { InvestmentInputData } from "./investment-input.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentCalculatorService {

    resultsData = signal<InvestmentResultYear[] | undefined>(undefined);

    calculateInvestmentResults(data: InvestmentInputData) {
  
      const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
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
    
      this.resultsData.set(annualData);
    }
}