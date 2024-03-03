import React from 'react'
import "./Taquilla.css"
import ReactPlayer from 'react-player';
import video from '../../assets/videotaquilla.mp4'

function Taquilla() {
  return (
    <section className='taquilla-section'>
      <div className='div-video-taquilla'>
        <video src={video} preload="auto" autoPlay loop className='video-taquilla'></video>
      </div>
        <button className='taquilla-btn'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m4.656 2.255l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92l-.78.16a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1l-.81-.38a.89.89 0 0 0-1.16.47l-3.36 7.91l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94a.89.89 0 0 0-.43-1.13z"></path></svg>COMPRA AQUÍ TU ABONO</button>
    </section>
  )
}

export default Taquilla;
