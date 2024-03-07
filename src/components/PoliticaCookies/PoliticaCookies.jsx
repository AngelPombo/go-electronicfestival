import React from 'react'
import "./PoliticaCookies.css"

function PoliticaCookies() {
  return (
    <section className='politica-cookies-section'>
      <h2 className='politica-cookies-titulo'>POLÍTICA DE COOKIES</h2>
      <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
      <p>Si no está seguro sobre qué tipo y versión de navegador usa para acceder a internet:</p>
      <p>Para Windows: click en ‘Ayuda’ en la parte superior de la ventana de su navegador y seleccione la opción ‘Acerca de’.</p>
      <div className='politica-cookies-div'>
        <h3>Google Chrome</h3>
        <ol>
          <li>Haz clic en el menú de Chrome Chrome situado en la barra de herramientas del navegador.</li>
          <li>Selecciona “Configuración”.</li>
          <li>Haz clic en “Mostrar opciones avanzadas…”</li>
          <li>En la sección “Privacidad”, haz clic en el botón “Configuración de contenido…”.</li>
          <li>En la sección “Cookies”, puedes configurar las opciones que se indican a continuación: Eliminar cookies, bloquear o permitir las cookies de forma predeterminada, incluir excepciones de cookies de dominios o sitios web específicos.</li>
          <li>Para mayor detalle consulta la ayuda de Google Chrome.</li>
        </ol>
      </div>
      <div className='politica-cookies-div'>
        <h3>Microsoft Internet Explorer 7.0 y 8.0</h3>
        <ol>
          <li>Haga clic en el botón “Herramientas” y después en “Opciones de Internet”.</li>
          <li>Haga clic en la ficha “Privacidad” y, a continuación, mueva el control deslizante a una posición intermedia entre los extremos superior e inferior, de manera que no se bloqueen ni permitan todas las cookies.</li>
          <li>Haga clic en “Sitios”.</li>
          <li>En el cuadro “Dirección del sitio web”, escriba la dirección de un sitio web y, después, haga clic en “Bloquear” o “Permitir”.</li>
          <li>Mientras escriba, irá apareciendo una lista de las páginas web que ya haya visitado. Si hace clic en un elemento de la lista, se mostrará en el cuadro Dirección del sitio web.</li>
          <li>Al finalizar, haga clic en “Aceptar”.</li>
          <li>Vuelva a colocar el control deslizante en su posición original y haga clic en “Aceptar”.</li>
          <li>Puedes consultar la ayuda de Windows para más información.</li>
        </ol>
      </div>
      <div className='politica-cookies-div'>
        <h3>Mozilla Firefox</h3>
        <ol>
          <li>En la parte superior de la ventana de Firefox, haz clic en el botón Firefox y selecciona “Opciones”.</li>
          <li>Selecciona el panel “Privacidad”.</li>
          <li>En “Firefox podrá:” elige “Usar una configuración personalizada para el historial”.</li>
          <li>Marca la opción “Aceptar cookies” para activarlas, y desmárcala para desactivarlas.</li>
          <li>Si no quieres recibir cookies de teceros desmarca “Aceptar cookies de terceros”.</li>
          <li>Puedes consultar la ayuda de Mozilla para más información.</li>
        </ol>
      </div>
      <div className='politica-cookies-div'>
        <h3>Safari</h3>
        <ol>
          <li>Haga clic en “Safari” en la parte superior de la ventana de su navegador y seleccione la opción ‘Preferencias’. </li>
          <li>Haga clic en “Privacidad”.</li>
          <li>En el apartado “Bloquear cookies” seleccione una de las siguientes opciones según le interese: “De publicidad y terceros”, “Siempre”, o “Nunca”.</li>
        </ol>
      </div>
      <div className='politica-cookies-div'>
        <h3>Opera</h3>
        <ol>
          <li>Haga clic en “Configuración” en la parte superior de la ventana del navegador y selecciona ‘Opciones’.</li>
          <li>A continuación seleccione la pestaña “Avanzado” y en la lista de la izquierda seleccionar “Cookies”. </li>
          <li>A continuación, seleccione “Aceptar cookies”.</li>
          <li>Dispone de tres opciones según su preferencia: “Aceptar cookies”, “Aceptar cookies solo del sitio visitado” o “No aceptar cookies nunca”.</li>
        </ol>
      </div>
    </section>
  )
}

export default PoliticaCookies
