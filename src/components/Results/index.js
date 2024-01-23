import React from 'react';
import { ResultsWrapper,
        TableHead,
        TableBody,
        Center,
} from './styled';
import { calculateInvestmentResults, formatter } from '../../util/investment';

export const Results = ({ userInput }) => {

  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <ResultsWrapper>
      <thead>
        <tr>
          <TableHead>Year</TableHead>
          <TableHead>Investment Value</TableHead>
          <TableHead>Interest (Year)</TableHead>
          <TableHead>Total Interest</TableHead>
          <TableHead>Invested Capital</TableHead>
        </tr>
      </thead>
      <TableBody>
        {resultsData.map(yearData => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;    
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )  
        })}
      </TableBody>
    </ResultsWrapper>
  )
}
