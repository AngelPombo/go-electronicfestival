import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/home' element={<Body />}/>
          <Route path='/taquilla' element={<p>Taquilla</p>}/>
          <Route path='/cartel' element={<p>Cartel</p>}/>
          <Route path='/zona-descanso' element={<p>Zona de descanso</p>}/>
        </Routes>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
