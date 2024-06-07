import React from 'react'
import { Link } from 'react-router-dom'
import "../Disclaimer/Disclaimer.css"

function Disclaimer() {
  return (
    <section className='disclaimer-section'>
        <div className='disclaimer-div'>
            <p className='disclaimer-p'>Go!Electronic Festival es un festival <span className='disclaimer-span'>exclusivamente para mayores de 18 años.</span></p>
            <ul className='disclaimer-ul'>
                <li>• <span className='disclaimer-span'>Los abonos/entradas comprados son nominativos:</span> Tendrás que dar tu Nombre y apellidos y DNI, fecha de nacimiento. </li>
                <li>• Sólo se permite adquirir <span className='disclaimer-span'>10 abonos/entradas en un mismo proceso</span> de compra.</li>
            </ul>
            <p className='disclaimer-p'>Si tienes alguna incidencia en la compra, debes contactar con el email <span className='disclaimer-span'>support@shotgun.live</span></p>
            <p className='disclaimer-p'>Si tienes alguna incidencia de otro tipo, puedes consultarnos por mensaje privado en <span className='disclaimer-span'>nuestra cuenta de instagram.</span></p>
        </div>
        <Link target='_blank' to={'https://shotgun.live/festivals/go-electronic-festival-xardin-botanico-aquapark-cerceda'}><button className='taquilla-btn'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m4.656 2.255l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92l-.78.16a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1l-.81-.38a.89.89 0 0 0-1.16.47l-3.36 7.91l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94a.89.89 0 0 0-.43-1.13z"></path></svg>COMPRA AQUÍ TU ABONO</button></Link>
    </section>
  )
}

export default Disclaimer
