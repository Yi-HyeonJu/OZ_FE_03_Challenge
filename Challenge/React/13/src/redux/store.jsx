import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import reducer from './reducers.jsx'


const middleware = applyMiddleware(thunk)

const store = createStore(reducer, middleware)

export default store