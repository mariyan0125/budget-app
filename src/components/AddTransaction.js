import React, { useContext, useState } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

export const AddTransaction = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [ title, setTitle ] = useState('');
  const [amount, setAmount ] = useState('');
  const [ type, setType ] =useState('positive');
  //console.log(transactions);

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTransaction(title, amount, type);
    setTitle('');
    setAmount('');
  }

const border = { type };

  return (
    <div className="add-transaction">
      <form className="add-form" onSubmit={handleSubmit}>
        <select className={"add-form__type " + border.type} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="positive" defaultValue>+</option>
          <option value="negative">-</option>
        </select>
        <input type="text" className={"add-form__description " + border.type} placeholder="Add description" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" className={"add-form__value " + border.type} placeholder="Value" value={amount} onChange={(e) => setAmount(+(e.target.value))}  required />
        <button className={"add-form__btn " + border.type}>add transaction</button>
      </form>  
    </div>
  )
}
