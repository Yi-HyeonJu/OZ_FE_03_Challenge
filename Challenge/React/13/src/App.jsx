/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const counter = useSelector((state) => state.counter)

  const todos = useSelector((state) => state.todos)

  const [todoValue, setTodovalue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', text: todoValue })
  }

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div className='App'>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}>
                {todo}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={todoValue}
            onChange={(e) => setTodovalue(e.target.value)}
          />
          <input
            type='submit'/>
        </form>
      </div>

      <div>
        Clicked : {counter} times
        {" "}
        <button onClick={handleIncrement}>
          +
        </button>
        {" "}
        <button onClick={handleDecrement}>
          -
        </button>
      </div>

    </div>
  )
}

export default App
