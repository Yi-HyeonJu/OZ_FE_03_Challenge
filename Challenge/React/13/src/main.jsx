import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import rootReducer from '../reducers/index.jsx'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <React.StrictMode>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </React.StrictMode>
  );
};

render();
store.subscribe(render);