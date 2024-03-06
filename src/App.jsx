import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Taquilla from './components/Taquilla/Taquilla'
import Cartel from './components/Cartel/Cartel'
import Camping from './components/Camping/Camping'
import Historia from './components/Historia/Historia'
import PoliticaPrivacidad from './components/PoliticaPrivacidad/PoliticaPrivacidad'
import PoliticaCookies from './components/PoliticaCookies/PoliticaCookies'
import AvisoLegal from './components/AvisoLegal/AvisoLegal'
import CondicionesGenerales from './components/CondicionesGenerales/CondicionesGenerales'

function App() {

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/taquilla' element={<Taquilla />}/>
          <Route path='/cartel' element={<Cartel />}/>
          <Route path='/camping' element={<Camping />}/>
          <Route path='/historia' element={<Historia />}/>
          <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />}/>
          <Route path='/politica-de-cookies' element={<PoliticaCookies />}/>
          <Route path='/aviso-legal' element={<AvisoLegal />}/>
          <Route path='/condiciones-generales' element={<CondicionesGenerales />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
