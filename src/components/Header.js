import React from 'react';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading-primary">Budget Tracker</h1>
      <Balance />
      <IncomeExpenses />
    </header>
  )
}
