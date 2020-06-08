import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import { TransactionPositive } from './TransactionPositive';
import { TransactionNegative } from './TransactionNegative';

export const TransactionList = () => {
  const { transactions } = useContext(BudgetContext);

  return (
    <div className="transaction-list">
      <div className="income">
        <h2 className="income__title">Income</h2>
        <ul className="income__list">
        { transactions.filter(transaction => transaction.type === 'positive').map(transaction => {
          return (
          <TransactionPositive transaction={transaction} key={transaction.id}/>
          );
            
        })}          
        </ul>
      </div>
      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>
        <ul className="expenses__list">
        { transactions.filter(transaction => transaction.type === 'negative').map(transaction => {
          return (
            <TransactionNegative transaction={transaction} key={transaction.id}/>
          );
            
        })}   
        </ul>
      </div>   
    </div>
  )
}
