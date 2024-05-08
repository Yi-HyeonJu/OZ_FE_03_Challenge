import React, { Component } from 'react';
import './ExpenseList.css'

class ExpenseList extends Component {
    render() {
        return (
            <>
                <ul className='list'>

                </ul>
                <button className='btn'>
                    목록 지우기
                </button>
            </>
        );
    }
}

export default ExpenseList;