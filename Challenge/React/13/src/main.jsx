import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index.jsx'
import { Provider } from 'react-redux';
import { loggermiddleware } from './middleware/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const middleware = applyMiddleware(loggermiddleware)

const store = createStore(rootReducer, middleware)

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
