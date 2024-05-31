import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoSlice'

function App() {

  const [text, setText] = useState('')
  const [editText, setEditText] = useState('')
  const [editId, setEditId] = useState(null)
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => {
    if (filter === "completed") {
      return state.todos.filter((todo) => todo.completed);
    } else if (filter === "active") {
      return state.todos.filter((todo) => !todo.completed);
    } else {
      return state.todos;
    }
  });

  const dispatch = useDispatch()

  const todoSubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== ''){
      dispatch(addTodo(text))
      setText('')
    }
  }

  const todoDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const todoEdit = (id, text) => {
    setEditId(id)
    setEditText(text)
  }

  const editCancle = () => {
    setEditId(null)
    setEditText('')
  }

  const editSave = () => {
    if(editText.trim() !== '') {
      dispatch(
        editTodo({
          id: editId,
          newText: editText
        })
      )
      setEditId(null)
      setEditText('')
    }
  }

  const tofoFilter = (value => {
    setFilter(value)
  })

  return (
    <div className='App'>
      <form onSubmit={todoSubmit}>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button type='submit'>할 일 추가하기</button>
      </form>
      <select value={filter} onChange={(e) => tofoFilter(e.target.value)}>
        <option value="all">모든 목록</option>
        <option value="completed">완료한 목록</option>
        <option value="active">미완료 목록</option>
      </select>
      <ul>
        {todos.map(
          todo => (
            <li key={todo.id}>
              {todo.id === editId
              ?
            <>
              <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)}/>
              <button onClick={editSave}>저장</button>
              <button onClick={editCancle}>취소</button>
            </>
              :
            <>
              <input type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}/>
              <span>
                {todo.text}
              </span>
              <button onClick={() => todoEdit(todo.id, todo.text)}>수정</button>
              <button onClick={() => todoDelete(todo.id)}>삭제</button>
            </>
        }
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default App
