import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigateTo = useNavigate();
  
  return (
    <section className='not-found'>
      <span>404</span>
      <p>Lo sentimos, la página a la que intenta acceder no existe.</p>
      <button onClick={() => {navigateTo("/")}}>VOLVER A INICIO</button>
    </section>
  )
}

export {NotFound};