import React, { useState } from 'react'
import "./Cartel.css"
import { Link } from 'react-router-dom';
import cartel from '/Cartel5.png'
import Iframe from 'react-iframe';
function Cartel() {

  const[clicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(!clicked)
  }
  
  return (
      <>
      {
        clicked ? 
          <section className='cartel-container-full'>
            <div className='exit-btn-container'>
              <button className='exit-btn' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffd2b1" stroke="#ffd2b1" strokeLinecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg></button>
            </div>
            <img className='cartel-img-full' src={cartel}  />
            <div className='download-btn-container'>
              <Link to={cartel} target="_blank" download={cartel}>
                <button className='download-btn'>Descargar cartel <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="#420328" fillRule="evenodd" clipRule="evenodd"><path d="M17 1.25a.75.75 0 0 1 .75.75v7.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75"/><path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3.04 3.04 0 0 0 .604-.865a.755.755 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"/></g></svg></button>
              </Link>
            </div>
          </section>
        :
        <section className='cartel-section'>
          <div className="left-div">
            <Iframe
              url="https://open.spotify.com/embed/artist/5BJa6TIqtoWm8QRRbfRmyt?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
            <Iframe
              url="https://open.spotify.com/embed/artist/0cmuKPJvBgFUphQbpfNI4h?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
            <Iframe
              url="https://open.spotify.com/embed/artist/093To89xljIKjuy5VguaP4?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
          </div>
          <button className='cartel-btn' onClick={handleClick}>
            <img className='cartel-img' src={cartel}  />
          </button>
          <div className="right-div">
          <Iframe
              url="https://open.spotify.com/embed/artist/1JcefSOP7bcWEluL0iEIaN?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
            <Iframe
              url="https://open.spotify.com/embed/artist/0AI1UbChn1oJGs5JHFkebU?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
            <Iframe
              url="https://open.spotify.com/embed/artist/4UCy3TOuu2eA6zNY50JQSV?utm_source=generator&theme=0"
              width="100%" height="152"
              loading="lazy"
              className="artists-iframes"
            />
          </div>
        </section>
      }
      </>
    
  )
}

export default Cartel;
