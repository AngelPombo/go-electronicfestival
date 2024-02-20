import React, { useState } from 'react'
import imagenCartel from "/cartel.jpeg"
import "./Cartel.css"

function Cartel({clicked, setClicked}) {

  function handleClick(){
    setClicked(!clicked)
  }
  
  return (
      <>
      {
        clicked ? 
          <button className='cartel-btn-full' onClick={handleClick}>
            <img className='cartel-img-full' src={imagenCartel}  />
          </button>
        :
        <section className='cartel-section'>
          <button className='cartel-btn' onClick={handleClick}>
            <img className='cartel-img' src={imagenCartel}  />
          </button>
        </section>
      }
      </>
    
  )
}

export default Cartel;
