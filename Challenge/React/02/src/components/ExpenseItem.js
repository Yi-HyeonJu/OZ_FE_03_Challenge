import React, { Component } from 'react';
import './ExpenseItem.css'
import { MdEdit, MdClear } from 'react-icons/md'

class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{this.props.expense.charge}</span>
          <span className='amount'>{this.props.expense.amount}</span>
        </div>
        <div className='btn'>
          <button className='edit-btn'>
            <MdEdit/>
          </button>
          <button className='clear-btn'>
            <MdClear/>
          </button>
        </div>
      </li>
    );
  }
}

export default ExpenseItem;