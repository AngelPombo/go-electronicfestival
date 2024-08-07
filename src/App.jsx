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
import { NotFound } from './components/NotFound/NotFound'
import Autobuses from './components/Autobuses/Autobuses'
import AutobusCoruna from './components/AutobusCoruna/AutobusCoruna'
import AutobusSantiago from './components/AutobusSantiago/AutobusSantiago'
import AutobusLugo from './components/AutobusLugo/AutobusLugo'
import AutobusVigo from './components/AutobusVigo/AutobusVigo'
import AutobusOurense from './components/AutobusOurense/AutobusOurense'

function App() {

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/taquilla' element={<Taquilla />}/>
          <Route path='/autobuses-oficiales' element={<Autobuses />}/>
          <Route path='/autobus-coruna' element={<AutobusCoruna />}/>
          <Route path='/autobus-santiago' element={<AutobusSantiago />}/>
          <Route path='/autobus-lugo' element={<AutobusLugo />}/>
          <Route path='/autobus-vigo' element={<AutobusVigo />}/>
          <Route path='/autobus-ourense' element={<AutobusOurense />}/>
          <Route path='/cartel' element={<Cartel />}/>
          <Route path='/camping' element={<Camping />}/>
          <Route path='/historia' element={<Historia />}/>
          <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />}/>
          <Route path='/politica-de-cookies' element={<PoliticaCookies />}/>
          <Route path='/aviso-legal' element={<AvisoLegal />}/>
          <Route path='/condiciones-generales' element={<CondicionesGenerales />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
