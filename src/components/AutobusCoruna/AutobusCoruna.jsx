import React from 'react'
import "./AutobusCoruna.css"

function AutobusCoruna() {
  return (
    <div className='iframe-container'>
        <iframe
            src="https://venta.enterticket.es/buy/?id=38715&color=d20005"
            id="etktfrm38715"
            width="100%"
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
    </div>
  )
}

export default AutobusCoruna
