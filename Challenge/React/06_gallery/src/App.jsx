import './App.css'
import Gallery from './components/Gallery.jsx'

function App() {

  return (
    <div className='box'>
      <h1 className='main-title'>
        Image Gallery 📷
      </h1>
      <p className='sub-title'>원하는 이미지를 검색하세요.</p>
      <Gallery/>
    </div>
  )
}

export default App
