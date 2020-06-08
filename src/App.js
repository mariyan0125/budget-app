import React from 'react';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { BudgetContextProvider } from './contexts/BudgetContext';


function App() {
  return (
    <div className="App">
      <BudgetContextProvider>
        <Header />
        <AddTransaction />
        <TransactionList />
      </BudgetContextProvider>
    </div>
  );
}

export default App;
