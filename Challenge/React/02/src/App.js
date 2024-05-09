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
  const [amount, setAmount] = useState(0);

  const [alert, setAlert] = useState({ show: false })

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if( charge !== "" && amount > 0 ){
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      const newExpenses = [...expenses, newExpense]
      
      setExpense(newExpenses)
      setCharge("")
      setAmount(0)
      
      handleAlert({ type: "success", text: "추가가 되었습니다."})
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

    return(
      <main className='main-container'>
        <div className='sub-container'>
          {alert.show ? <Alert type={alert.type} text={alert.text}/> : null }
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense Form */}
            <ExpenseForm charge={charge} handleCharge={handleCharge}
            amount={amount} handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense List */}
            <ExpenseList expense={expenses} handleDelete={handleDelete}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>
              총합계 :
            </p>
          </div>
        </div>
      </main>
    )
}

export default App;