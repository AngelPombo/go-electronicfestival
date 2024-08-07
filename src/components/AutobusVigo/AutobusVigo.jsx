import React from 'react'

function AutobusVigo() {
  return (
    <div className='iframe-container'>
        <iframe
            src="https://venta.enterticket.es/buy/?id=38744&color=d20005"
            id="etktfrm38744"
            width="100%"
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
    </div>
  )
}

export default AutobusVigo
