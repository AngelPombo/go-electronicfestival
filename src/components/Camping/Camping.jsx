import React, { useState } from 'react'
import "./Camping.css"
import ReactPlayer from 'react-player';
import video from "../../assets/aquaparkvideo.mp4"
import { Link } from 'react-router-dom';

function Camping() {

  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);
  const [clicked9, setClicked9] = useState(false);
  const [clicked10, setClicked10] = useState(false);
  const [clicked11, setClicked11] = useState(false);
  const [clicked12, setClicked12] = useState(false);
  const [clicked13, setClicked13] = useState(false);
  const [clicked14, setClicked14] = useState(false);

  return (
    <section className='camping-section'>
        <h2 className='camping-titulo'>Camping</h2>
        <div className='react-player'>
          <ReactPlayer 
          url={video}
          playing={true} 
          loop
          width="100%"
          height="100%"
          className='video'
          />
        </div>
        
        <article className='camping-article'>
          <p>Dispondremos de nuestra zona de acampada instalada en el Aquapark de Cerceda, que permanecerá abierta desde el viernes 13 de septiembre a las 17:00h hasta el lunes 16 de septiembre a las 12:00h de forma ininterrumpida.</p>
          <p>Para poder acceder al camping es necesario disponer de este producto:</p>
          <ul className="ul-bonos">
            <Link to={'/taquilla'}><li className='camping-bono'>Abono General + Camping</li></Link>
          </ul>
          <h3 className='camping-h3'>SERVICIOS DE LA ZONA DE ACAMPADA</h3>
          <ul className='camping-ul'>
            <li><p>Zonas de <span className="resaltado">baño y duchas</span>, con agua caliente.</p></li>
            <li><p>Sanitarios provistos de <span className="resaltado">baños, lavabos, espejos, enchufes</span> y atendidos por un <span className="resaltado">equipo de mantenimiento y limpieza 24 horas</span>.</p></li>
            <li><p>Amplias <span className="resaltado">zonas de sombra</span>.</p></li>
            <li><p>Fuentes con <span className="resaltado">agua potable</span>.</p></li>
            <li><p>Espacio para <span className="resaltado">recarga de móviles</span>.</p></li>
            <li><p><span className="resaltado">Zona bar</span> para adquirir bebidas y hielo. Dispondremos de <span className="resaltado">packs a la venta</span> que incluirán botella, vasos, hielo y refresco.</p></li>
          </ul>
          <div className="important-container">
            <h4 className='camping-span'>IMPORTANTE:</h4>
            <p>Los usuarios que accedan a la zona de acampada están obligados a respetar la convivencia y a no perturbar el descanso de los demás.</p>
          </div>
          <div className='acordeon-cuerpo'>
            <div className='acordeon'>
              <h3 className='camping-h3'>DUDAS Y CONSULTAS FRECUENTES</h3>
              <section>
              <div className={`contenedor ${clicked ? "activa" : ""} `} onClick={() => setClicked(!clicked)}> 
                <h4 className='label'>¿Qué horarios tiene la zona de acampada?</h4>
                <p className='content'>Desde las 17:00h del viernes 13 de septiembre hasta las 12:00h del lunes 16 de septiembre.</p>
              </div>
              <div className={`contenedor ${clicked1 ? "activa" : ""} `} onClick={() => setClicked1(!clicked1)}> 
                <h4 className='label'>¿Puedo escoger donde montar mi tienda?</h4>
                <p className='content'><span className='camping-span'>NO.</span> El camping se ocupará por orden de llegada hasta completar el aforo y de la forma indicada por el personal de organización. Todos los viales principales y las salidas de emergencia deben encontrarse completamente despejados para el paso de personas y vehículos.</p>
              </div>
              <div className={`contenedor ${clicked2 ? "activa" : ""} `} onClick={() => setClicked2(!clicked2)}> 
                <h4 className='label'>¿Puedo llevar la tienda del tamaño/capacidad que quiera?</h4>
                <p className='content'><span className='camping-span'>NO.</span> En la zona de acampada estará prohibido el uso de tiendas de campaña individuales, el mínimo permitido por tienda será de 2 personas. Además tampoco se permite el uso de tiendas de campaña de mayor capacidad que el número de ocupantes de la misma. Por ejemplo, no se podrá montar una tienda de campaña de 6 personas y que sólo sea utilizada por 2 personas. Los asistentes deberán seguir las indicaciones del personal para acomodarse dentro de la zona de descanso. Las parcelas serán designadas al entrar por el personal de organización.</p>
              </div>
              <div className={`contenedor ${clicked3 ? "activa" : ""} `} onClick={() => setClicked3(!clicked3)}> 
                <h4 className='label'>¿Si llego antes que mis amig@s puedo erservar un espacio para ellos en la zona de acampada?</h4>
                <p className='content'><span className='camping-span'>NO.</span> No estará permitida la reserva de espacio para posibles amig@s que llegarán en otro momento.</p>
              </div>
              <div className={`contenedor ${clicked4 ? "activa" : ""} `} onClick={() => setClicked4(!clicked4)}>  
                <h4 className='label'>¿Puedo llevar sillas y/o mesas de camping?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> Podrás acceder con sillas y mesas pequeñas, ocupando el espacio delimitado por el personal de la organización.</p>
              </div>
              <div className={`contenedor ${clicked5 ? "activa" : ""} `} onClick={() => setClicked5(!clicked5)}> 
                <h4 className='label'>¿Puedo llevar un cenador o carpa para montar junto a mi tienda?</h4>
                <p className='content'><span className='camping-span'>NO.</span> No se podrán montar "cenadores", toldos, gazebos, carpas u otros elementos que supongan una exntensión del espacio de la tienda de campaña. Aunque la zona de descanso dispone de zonas sombreadas, podéis llevar vuestro propio toldo, pero únicamente podréis colocarlo si esa zona no dispone de sombreado (no se puede acceder con sombrillas), y siempre ocupando la superficie delimitada por la organización y respetando los pasillos de evacuación, las salidas de emergencia y/o acceso a las parcelas. <span className='camping-span'>El incumplimiento de este punto será motivo de expulsión</span></p>
              </div>
              <div className={`contenedor ${clicked6 ? "activa" : ""} `} onClick={() => setClicked6(!clicked6)}>  
                <h4 className='label'>¿Puedo acceder a la zona del camping con mi coche?</h4>
                <p className='content'><span className='camping-span'>NO.</span> Sólo es posible acampar con tiendas de camapaña, estando totalmente prohibido el acceso de cualquier vehículo.</p>
              </div>
              <div className={`contenedor ${clicked7 ? "activa" : ""} `} onClick={() => setClicked7(!clicked7)}>  
                <h4 className='label'>¿Hay agua caliente?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> las duchas de la zona de acampada disponen de agua caliente, además de agua fría.</p>
              </div>
              <div className={`contenedor ${clicked8 ? "activa" : ""} `} onClick={() => setClicked8(!clicked8)}> 
                <h4 className='label'>¿Hay agua potable en la zona de acampada?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> Todo el agua que hay tanto en la zona de descanso como en el resto del recinto es agua potable.</p>
              </div>
              <div className={`contenedor ${clicked9 ? "activa" : ""} `} onClick={() => setClicked9(!clicked9)}> 
                <h4 className='label'>¿Hay zonas de recarga de teléfonos móviles?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> Habrá zonas de recarga en el recinto.</p>
              </div>
              <div className={`contenedor ${clicked10 ? "activa" : ""} `} onClick={() => setClicked10(!clicked10)}> 
                <h4 className='label'>¿Estará vigilada?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> La zona de acampada contará con un servicio continuo de vigilancia.</p>
              </div>
              <div className={`contenedor ${clicked11 ? "activa" : ""} `} onClick={() => setClicked11(!clicked11)}> 
                <h4 className='label'>¿Puedo introducir comida y bebida?</h4>
                <p className='content'><span className='camping-span'>SÍ.</span> puedes introducir tu comida y/o bebida, aunque también dispondrás de una zona de restauración en el propio festival, donde adquirir tanto comida como packs de bebida. No está permitido introducir envases de cristal ni objetos punzantes o que puedan ser considerados como armas. Os recordamos que debéis hacer uso de las papeleras y puntos selectivos de basura para depositar los residuos. Se recomienda que llevéis bolsas de basura para mantener el camping en las mejores condiciones higiénicas.</p>
              </div>
              <div className={`contenedor ${clicked12 ? "activa" : ""} `} onClick={() => setClicked12(!clicked12)}> 
                <h4 className='label'>¿Puedo hacer una barbacoa o introducir un camping gas?</h4>
                <p className='content'><span className='camping-span'>NO.</span> No está permitido por la seguridad de la zona de descanso.</p>
              </div>
              <div className={`contenedor ${clicked13 ? "activa" : ""} `} onClick={() => setClicked13(!clicked13)}> 
                <h4 className='label'>¿Puedo introducir un equipo de sonido?</h4>
                <p className='content'><span className='camping-span'>NO.</span> No está permitido ya que podría alterar la convivencia en la zona de acampada.</p>
              </div>
              <div className={`contenedor ${clicked14 ? "activa" : ""} `} onClick={() => setClicked14(!clicked14)}> 
                <h4 className='label'>¿Puedo llevar mascotas?</h4>
                <p className='content'><span className='camping-span'>NO.</span> No está permitido ya que podría alterar la convivencia en la zona de acampada.</p>
              </div>
              </section>
            </div>  
          </div>
        </article>
    </section>
  )
}

export default Camping
