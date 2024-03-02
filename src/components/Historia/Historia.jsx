import React from 'react'
import "./Historia.css"
import RjJunior from '/RjJunior.jpeg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Historia() {
  return (
    <section className='historia-section'>
      <h2 className='historia-titulo'>HISTORIA</h2>
      <div className='historia-content'>
        <p className='historia-info p1'><span className='historia-span'>Go! Electronic Festival</span> nace del trabajo incansable de uno de los promotores y artistas con más trayectoria de la comunidad gallega. <span className='historia-span'>Rj Junior</span> lleva más de 17 años forjándose en la escena de club, contando con los mejores artistas del panorama nacional e internacional.</p>
        <div className='foto-container'>
          <LazyLoadImage src={RjJunior} className='foto'/>
        </div>
        <p className='historia-info p2'>Todo este trabajo llevó a su club, <span className='historia-span'>Sala Pantalán</span>, a ser uno de los referentes de su comunidad natal. Ahora, Rj Junior, busca dar el paso definitivo: <span className='historia-span'>tener su propio festival</span>. Así podrá seguir mostrando su manera de entender este género y continuará entreteniendo a su público con eventos de calidad, cuidados hasta el último detalle. Su planteamiento cuenta, no sólo con el punto de vista de un empresario, sino también con el de un klubber más, Dj y luchador incansable, que siempre ha seguido adelante para cumplir sus metas.</p>
        <p className='historia-info p3'><span className='historia-span'>¡Esperamos que esta sea la primera de muchas ediciones!</span></p>
      </div>
    </section>
  )
}

export default Historia;
