import React, { useState } from 'react'
import "./Autobuses.css"

function Autobuses() {

    const[clickedCoruna, setClickedCoruna] = useState(false);
    const[clickedSantiago, setClickedSantiago] = useState(false);
    const[clickedLugo, setClickedLugo] = useState(false);
    const[clickedVigo, setClickedVigo] = useState(false);
    const[clickedOurense, setClickedOurense] = useState(false);

    function handleClickCoruna(){
        setClickedCoruna(!clickedCoruna);
    }

    function handleClickSantiago(){
        setClickedSantiago(!clickedSantiago);
    }

    function handleClickLugo(){
        setClickedLugo(!clickedLugo);
    }

    function handleClickVigo(){
        setClickedVigo(!clickedVigo);
    }

    function handleClickOurense(){
        setClickedOurense(!clickedOurense)
    }

  return (
    <section className='autobuses-section'>
      <h2 className='autobuses-titulo'>Autobuses Oficiales</h2>
      <div className='autobuses-div'>
        <button onClick={handleClickCoruna} className='taquilla-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" fill='white'>
                <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
            </svg>
            A CORUÑA
        </button>
        {clickedCoruna && (
        <div>
          <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38715"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
        </div>
      )}
        <button onClick={handleClickSantiago} className='taquilla-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" fill='white'>
                <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
            </svg>
            SANTIAGO
        </button>
        {clickedSantiago && (
        <div>
          <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38717"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
        </div>
      )}
        <button onClick={handleClickLugo} className='taquilla-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" fill='white'>
                <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
            </svg>
            LUGO
        </button>
        {clickedLugo && (
        <div>
          <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38742"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
        </div>
      )}
        <button onClick={handleClickVigo} className='taquilla-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" fill='white'>
                <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
            </svg>
            VIGO
        </button>
        {clickedVigo && (
        <div>
          <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38744"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
        </div>
      )}
        <button onClick={handleClickOurense} className='taquilla-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" fill='white'>
                <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
            </svg>
            OURENSE
        </button>
        {clickedOurense && (
        <div>
          <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38746"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
        </div>
      )}
      </div>
      <div className='autobuses-info-div'>
        <p>Si tiene alguna duda o consulta puede ponerse en contacto con nosotros vía:</p>
        <ul className='autobuses-info-ul'>
            <li><span className='autobuses-span'>• Email:</span> goelectronic@viajexpres.com</li>
            <li><span className='autobuses-span'>• Llamada/Whatsapp:</span> 676 680 774</li>
        </ul>
      </div>
    </section>
  )
}

export default Autobuses
