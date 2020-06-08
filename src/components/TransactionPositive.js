import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

export const TransactionPositive = ({transaction}) => {
  const { deleteTransaction} = useContext(BudgetContext);

  return (
    <li className="item">
      <div className="item__title">{transaction.title}</div>
      <div className="item__amount plus">
        <span>+${(transaction.amount).toFixed(2)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </div>   
    </li>
  )
}
