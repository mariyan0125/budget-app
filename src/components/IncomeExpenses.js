import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

export const IncomeExpenses = () => {
  const { transactions } = useContext(BudgetContext);

  const income = transactions.reduce((acc, curr) => {
    if(curr.type === 'positive'){
      acc += curr.amount;
    }
    return acc;
  }, 0).toFixed(2);

  const expenses = transactions.reduce((acc, curr) => {
    if(curr.type === 'negative'){
      acc += curr.amount;
    }
    return acc;
  }, 0).toFixed(2);
  

  return (
    <div className="inc-exp">
      <div className="inc-exp__income">
        <h3 className="heading">Income</h3>
  <p className="inc-exp__total plus">+${income}</p>
      </div>
      <div className="inc-exp__expenses">
        <h3 className="heading">Expenses</h3>
  <p className="inc-exp__total minus">-${expenses}</p>
      </div>
    </div>
  )
}
