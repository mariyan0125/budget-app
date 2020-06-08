import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BudgetContext = createContext();

export const BudgetContextProvider = (props) => {
  const [transactions, setTransactions] = useState([
    { title: 'Paycheck', amount: 5000, type:'positive', id: 1 }, 
    { title: 'Paycheck', amount: 5000, type:'positive', id: 2 }, 
    { title: 'Eating out', amount: 300, type:'negative', id: 3 }, 
    { title: 'Gift', amount: 300, type:'negative', id: 4 },
    { title: 'Movies', amount: 100, type:'negative', id: 5 }

  ]);

  const addTransaction = (title, amount, type) => {
    setTransactions([...transactions, {title, amount, type, id: uuidv1()}]);
  };
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !==id));
  };

  return (
    <BudgetContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {props.children}
    </BudgetContext.Provider>
  )
}
