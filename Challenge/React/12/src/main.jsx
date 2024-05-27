import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.main.css'
import { AppContextProvider } from './contexts/AppContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider value={{}}>
    <App />
  </AppContextProvider>
)