import React from 'react'

function AutobusSantiago() {
  return (
    <div className='iframe-container'>
        <iframe
            src="https://venta.enterticket.es/buy/?id=38717&color=d20005"
            id="etktfrm38717"
            width="100%"
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <script type="text/javascript" src="https://d31tcnbxvxtafg.cloudfront.net/js/libraries/buy.js"></script>
    </div>
  )
}

export default AutobusSantiago
