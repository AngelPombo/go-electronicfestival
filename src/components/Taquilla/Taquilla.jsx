import React from 'react'
import "./Taquilla.css"
import video from '../../assets/videotaquilla.mp4'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

function Taquilla() {
  return (
    <section className='taquilla-section'>
      <div className='div-video-taquilla'>
          <ReactPlayer 
          url={video}
          playing={true} 
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          className='video-taquilla'
          />
        </div>
      <Link target='_blank' to={'https://www.entradasatualcance.com/tickets-go-electronicfestival'}><button className='taquilla-btn'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m4.656 2.255l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92l-.78.16a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1l-.81-.38a.89.89 0 0 0-1.16.47l-3.36 7.91l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94a.89.89 0 0 0-.43-1.13z"></path></svg>COMPRA TUS ABONOS Y ENTRADAS AQUÍ</button></Link>
      <Link target='_blank' to={'https://bonocultural.entradasatualcance.com/tickets-go-electronic-festival-bono-cultural#/sell/events/12222/sessions/18405'}><button className='taquilla-btn'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m4.656 2.255l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92l-.78.16a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1l-.81-.38a.89.89 0 0 0-1.16.47l-3.36 7.91l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94a.89.89 0 0 0-.43-1.13z"></path></svg>BONO CULTURAL AQUÍ</button></Link>
    </section>
  )
}

export default Taquilla;
