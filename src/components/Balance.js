import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

export const Balance = () => {
  const { transactions } = useContext(BudgetContext);

  
  const amountsPositive = transactions.filter(transaction => transaction.type === 'positive').map(transaction => transaction.amount).reduce((acc, curr) => (acc += curr), 0);
  
  const amountsNegative = transactions.filter(transaction => transaction.type === 'negative').map(transaction => transaction.amount).reduce((acc, curr) => (acc += curr), 0);
 
  const balance = amountsPositive - amountsNegative;
  const totalBalance = balance > 0 ? balance : Math.abs(balance);

  return balance >= 0 ?  (
    <h2 className="balance">Your Balance <span>${totalBalance.toFixed(2)}</span></h2>
  ) :  (
    <h2 className="balance">Your Balance <span>-${totalBalance.toFixed(2)}</span></h2>
  );
  
}
