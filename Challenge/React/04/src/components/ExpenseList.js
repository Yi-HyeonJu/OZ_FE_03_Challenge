import React from 'react';
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    return (
      <>
        <ul className='list'>
          {props.expense.map(expense => {
					return (
            <ExpenseItem key={expense.id} expense={expense}
            handleDelete={props.handleDelete}/>
          )
				})}
        </ul>
        <button className='btn'>
          목록 지우기
        </button>
			</>
    );
}

export default ExpenseList;