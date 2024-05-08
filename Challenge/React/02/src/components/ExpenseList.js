import React, { Component } from 'react';
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className='list'>
          {this.props.initialExpenses.map(expense => {
					return (
            <ExpenseItem key={expense.id} expense={expense}/>
          )
				})}
        </ul>
        <button className='btn'>
          목록 지우기
        </button>
			</>
    );
  }
}

export default ExpenseList;