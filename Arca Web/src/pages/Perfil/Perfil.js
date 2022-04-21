import React from 'react'
//import logoArca from "arcalogo.png";
//import fondoArca from "prueba.png";

import './style.css';
import medallaoro from './arca/medallaoro.png';
import medallabronce from './arca/medallabronce.png';
import medallaplata from './arca/medallaplata.png';



function Perfil() {
    return (
        <section>
     
        <div className="about-container">
           
           
            <div className="about-text">
                
                <p>Nombre: Leopoldo Maximo</p>
                <p>Área: Seguridad </p>
                <p>Linea: Producción</p>
                <p>Planta: Monterrey</p>
                <p>CEDIS en la que se encuentra</p>
                <p>Correo: example@gmail.com</p>
            </div>
        </div>
        
        <div className="box-container">
           
            <div className="box-1">
                <div className="box-11">
                <div className="box-img-1">
                <img src= {medallabronce}/>
                <p>Job Relations</p>
                <p>Puntaje: 800</p>
                </div>
                </div>
            </div>
             
             <div className="box-2">
                 <div className="box-22">
                <div className="box-img-2">
                    <img src={medallaplata}/>
                    <p>Job Methods</p>
                    <p>Puntaje: 2000</p>
                    </div>
                    </div>
            </div>
             
             <div className="box-3">
                <div className="box-33">
                <div className="box-img-3">
                    <img src={medallaoro}/>
                    <p>Job Instruction</p>
                    <p>Puntaje: 3500</p>
                    </div>
                </div>
                    
            </div>
        </div>        
    </section>
    )
}

export default Perfil;