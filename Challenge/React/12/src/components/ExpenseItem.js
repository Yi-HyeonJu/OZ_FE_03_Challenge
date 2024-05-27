import { TiDelete } from 'react-icons/ti'

const ExpenseItem = ({ id, name, cost }) => {
    return (
        <li
            className='list-group-item d-flex
            justify-content-between
            align-items-center'
        >
            {name}
            <div>
                <span className='badge bd-secondary me-3'>
                    {cost}
                </span>
                <TiDelete
                    size={'1.5em'}
                />
            </div>
        </li>
    );
};

export default ExpenseItem;