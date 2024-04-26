import React from 'react'
import'./Map.css'
const Map = () => {
  return (
    <div className='container-map'>
         <h1 className='title'>Onde nos encontrar </h1>
        <div className='map'>
          <iframe title="Mapa de Localização" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5487997561685!2d32.55209511426816!3d-25.96684747296619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1fbf0ca185c45d33%3A0x3c43349f6f7b17de!2sMatola!5e0!3m2!1sen!2smz!4v1646405709903!5m2!1sen!2smz" width="800" height="500" allowFullScreen  loading="lazy"/>
        </div>
    </div>
  )
}

export default Map
