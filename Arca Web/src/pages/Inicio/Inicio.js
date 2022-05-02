import React from 'react';
import './Inicio.css';
//import { Link } from "react-router-dom";

import jrPic from './img/JR.png'
import jmPic from './img/JM.png';
import jiPic from './img/JI.png';
import cardjr from './Cards/tarjetajr.pdf';
import cardjm from './Cards/tarjetajm.pdf';
import cardji from './Cards/tarjetaji.pdf';


function Inicio() {
   return (

      <div className="container">
         <div className='containerchild'>
            <div className="divplane-inicio">
               
               <h1 className="title-inicio">Job<br />Relations</h1>
               <p className="text-inicio">
                  JR enfatiza el <br /> respeto por las personas, por lo que
                  entrena <br /> supervisores a lidiar con problemas y a cómo
                  prevenirlos.
               </p>

               <p className="img-inicio">
                  <a href={cardjr} target="_blank" rel='noreferrer'>
                     <img className="jpic-inicio" src={jrPic} alt="Foto de JR" />
                  </a>
               </p>

            </div>

            <div className="divplane-inicio">
               <h1 className="title-inicio">Job<br />Methods</h1>
               <p className="text-inicio">
                  JM se enfoca en mejorar las tareas habituales de los
                  supervisores, al utilizar de mejor manera sus recursos
                  ya disponibles.
               </p>

               <p className="img-inicio">
                  <a href={cardjm} target="_blank" rel='noreferrer'>
                     <img className="jpic-inicio" src={jmPic} alt="Foto de JM" />
                  </a>
               </p>

            </div>

            <div className="divplane-inicio">
               <h1 className="title-inicio">Job<br />Instructions</h1>
               <p className="text-inicio">
                  JI entrena a los supervisores para desarrollar su trabajo
                  de la mejor manera posible para que, a su vez, ellos
                  entrenen a otros.
               </p>

               <p className="img-inicio">
                  <a href={cardji} target="_blank" rel='noreferrer'>
                     <img className="jpic-inicio" src={jiPic} alt="Foto de JI" />
                  </a>
               </p>

            </div>
         </div>
      </div>
   );
}

export default Inicio;