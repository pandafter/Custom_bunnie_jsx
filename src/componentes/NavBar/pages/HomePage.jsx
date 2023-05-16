import React from "react";
import imagen_1 from './content_pages/conejito_1.png';
import imagen_2 from './content_pages/Captura de pantalla_20230212_013005.png';
import { Link } from 'react-router-dom';







function HomePage() {

  return (
    <main>    
      <h1 className="visible" id="titulo_inicio" >Vistete con <br></br>toda la actitud</h1>
      <div id="pantalla"></div>
      <div><img id="imagen1" src={imagen_1} alt="imagen1"></img></div>
      <div id="texto_inicio">
          <p>Tus prendas custom, al mejor precio, de la mejor calidad y con los diseños más creativos que vienen de tu imaginación.</p>
      </div>

          <Link to='/tienda'>
            <button className="botones" id="boton_a_tienda">SHOP NOW</button>
          </Link>

          <div id="grupo1">
            <img id="imagen2" src={imagen_2} alt="imagen2"></img>
            <h2 id="subtitulo_1">Los diseños <br></br> más creativos</h2>
            <p id="texto_grupo_1">En Custom Bunnie somos participes de la creatividad de nuestros usuarios, queremos que no se pierdan ni un detalle de lo que pasa por sus mentes. Aplicando nuestros conocimientos en Diseño y con ayuda de las nuevas IA, haremos de tu imaginación una realidad. Que lo mejor de todo es que puedes lucir con el mejor estilo.</p>
          </div>
          <div className="contenedor_bunnie">
          <h1 id="bunnie_titulo">
                CREA <br></br>
                INNOVA
            </h1>
          <div id="bunnie_back">
            </div>
          </div>
          <div id="grupo2">
              <h1 id="titulo_cotizaciones">Cotizaciones E Información</h1>
              <Link to='/contacto'>
              <button className="botones" id="boton_cotizaciones">Cotiza</button>
          </Link>
          </div>
          
    </main>
  );
}

export default HomePage;
