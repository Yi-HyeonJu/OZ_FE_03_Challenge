import { useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  const [expenses, setExpense] = useState([
    { id: 1, charge: '콜라', amount: 1800},
    { id: 2, charge: '빵', amount: 1300},
    { id: 3, charge: '컵라면', amount: 1700}
  ])

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState('');
  const [id, setId] = useState('')

  const [alert, setAlert] = useState({ show: false })

  const [edit, setEdit] = useState(false)

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id)
    
    setExpense(newExpense)
    
    handleAlert({ type: "danger", text: "삭제가 되었습니다."})
  }

  const clearItems = () => {
    setExpense([])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if( charge !== "" && amount > 0 ){

      if(edit) {
        const newExpense = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })

        setExpense(newExpense)
        setEdit(false)
        handleAlert({ type: "success", text: "수정이 되었습니다."})
      } else {
        const newExpense = {id: crypto.randomUUID(), charge, amount}
        const newExpenses = [...expenses, newExpense]
        setExpense(newExpenses)
        handleAlert({ type: "success", text: "추가가 되었습니다."})
      }
      
      setCharge("")
      setAmount('')
      
      
    }else {
      handleAlert({ type: "danger", text: "상품의 이름과 비용을 적어주세요."})
    }
  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 5000)
  }

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id)
    const { charge, amount } = expense
    setCharge(charge)
    setAmount(amount)
    setId(id)
    setEdit(true)
  }

    return(
      <main className='main-container'>
        <div className='sub-container'>
          {alert.show ? <Alert type={alert.type} text={alert.text}/> : null }
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense Form */}
            <ExpenseForm charge={charge} handleCharge={handleCharge}
            amount={amount} handleAmount={handleAmount}
            handleSubmit={handleSubmit} edit={edit}
            />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense List */}
            <ExpenseList expenses={expenses} handleDelete={handleDelete}
            clearItems={clearItems} handleEdit={handleEdit}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>
              총합계 :
              <span>
                {expenses.reduce((acc, curr) => {
                  return (acc += curr.amount)
                },0)}원
              </span>
            </p>
          </div>
        </div>
      </main>
    )
}

export default App;