import './App.css'

// eslint-disable-next-line react/prop-types
function App({ value, onIncrement, onDecrement }) {

  return (
    <div className='App'>
      Clicked: {value} times
      {" "}
      <button onClick={onIncrement}>
        +
      </button>
      {" "}
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  )
}

export default App
