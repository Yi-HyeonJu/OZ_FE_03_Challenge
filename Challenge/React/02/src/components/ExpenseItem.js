import React from 'react';
import './ExpenseItem.css'
import { MdEdit, MdClear } from 'react-icons/md'

const ExpenseItem = (props) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{props.expense.charge}</span>
        <span className='amount'>{props.expense.amount}</span>
      </div>
      <div className='btn'>
        <button className='edit-btn'>
          <MdEdit/>
        </button>
        <button className='clear-btn'
        onClick={() => props.handleDelete(props.expense.id)}>
          <MdClear/>
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;