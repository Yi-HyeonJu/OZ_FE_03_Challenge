/* eslint-disable react/prop-types */
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, lateIncrement, lateDecrement } from './redux/action.jsx'

function App() {

  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className='container'>

      <div> Clicked : {counter} times </div>

      <div className='basic'>
        <button onClick={() => dispatch(increment())}> 바로 + </button>
        <button onClick={() => dispatch(decrement())}> 바로  - </button>
      </div>

      <div className='late'>        
        <button onClick={() => dispatch(lateIncrement())}> 1초후 + </button>
        <button onClick={() => dispatch(lateDecrement())}> 1초후 - </button>
      </div>

    </div>
  )
}

export default App
