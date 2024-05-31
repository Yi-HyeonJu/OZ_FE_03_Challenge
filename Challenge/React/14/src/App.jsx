import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoSlice'

function App() {

  const todos = useSelector(state => state.todos)

  const [text, setText] = useState('')
  const [editText, setEditText] = useState('')
  const [editId, setEditId] = useState(null)

  const dispatch = useDispatch()

  const todoSubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== ''){
      dispatch(
        addTodo(text)
      )
      setText('')
    }
  }

  const todoDelete = (id) => {
    dispatch(
      deleteTodo(id)
    )
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

  return (
    <div className='App'>
      <form onSubmit={todoSubmit}>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button
          type='submit'
        >할 일 추가하기</button>
      </form>
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
