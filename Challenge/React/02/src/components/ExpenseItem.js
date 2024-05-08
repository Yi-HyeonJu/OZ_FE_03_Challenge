import React, { Component } from 'react';
import './ExpenseItem.css'
import { MdEdit, MdClear } from 'react-icons/md'

class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>빵</span>
          <span className='amount'>100원</span>
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