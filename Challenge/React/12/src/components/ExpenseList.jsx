import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    
    const { expenses } = useContext(AppContext)

    return (
        <>
            <input
            type='text'
            className='form-control'
            placeholder='검색하기...'
            />
            <ul className='list-group mt-3 mb-3'>
                {expenses.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;