import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import rootReducer from './reducers/index.jsx'
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        // onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        // onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </Provider>
  </React.StrictMode>
);
