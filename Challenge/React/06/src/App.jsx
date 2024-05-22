import './App.css'
import Nav from './components/Nav'
import { Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/index'
import MainPage from './pages/Mainpage/index'
import DetailPage from './pages/DetailPage/index'
import SearchPage from './pages/SearchPage/index'

const Layout = () => {
  return(
    <>
      <Nav />

      <Outlet />
    </>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        {/* 동적으로 변하는 것을 나타내는 기호 : 추가 */}
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
    </Routes>
  )
}

export default App
