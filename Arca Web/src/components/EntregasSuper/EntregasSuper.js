import React, { useEffect, useState } from 'react'

import "./EntregasSuper.css"
// para el popup que muestra las instrucciones del entregable 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { ApiUrlXD } from '../../const/global';




function EntregasSuper() {
    const [datSubNiv, setDatSubNiv] = useState();
    const idU = localStorage.getItem("usId")
    const [linkEntrega, setLinkEntrega] = useState("");
    
      
   

    function subirEntrega (e, idSub){
        const url =ApiUrlXD + "subirArch" ;
        const urlE = linkEntrega;
        const credentials = {
            idU,
            idSub,
            urlE
        }
        const options = {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
        fetch(url,options)
        .then((resp) => {
            return resp.json()
          })
          .then((json) => {
            console.log(json)
        })
        
        e.preventDefault();
    }

    

    function botonEntrega(xd, Sub_id) {
        // xd es el puntaje del videojuego

        if (xd >= 70) {
            return (
                <Popup trigger={
                    <button>
                        Entregar
                    </button>} >

                    <form  onSubmit={e => subirEntrega(e,Sub_id)} >
                        <label htmlFor='entregaUrl'> Sube el link de drive de tu entrega: </label>
                        <input type="url" id="entregaUrl" onChange={e => setLinkEntrega(e.target.value)}></input>
                        <button type="submit">subir</button>
                    </form>

                </Popup>
            );
        }

        return (
            <button disabled>
                No disponible
            </button>
        )

    }

    function verifEntrega(xd) {

        if (xd == null) {
            return "---"
        }
        return xd

    }


    useEffect(() => {

        let credentials = {
            idU
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(ApiUrlXD + 'getSubNiv', options)
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setDatSubNiv(actualData);
            })

    })


    return (
        <div className="entregacontent">
            <div className="tittleentre">
                <center><h1>Entregas</h1></center>
            </div>
            <div className="contentre justify-content-center">
                <div className="scrolltable1">


                    <table className="table">
                        <thead className="encabetable">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Estado</th>
                                <th scope="col">P. entrega</th>
                                <th scope="col">P. juego</th>
                                <th scope="col">Sobre</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpotable">
                            {datSubNiv &&
                                datSubNiv.subNivel.map(({ Sub_ID, Instruccion, Color, Elemento, PuntajeEntrega, PuntajeVideojuego }) =>
                                (
                                    <tr>

                                        <th scope="row">{Sub_ID}</th>
                                        <td>
                                            <Popup trigger={<div className='nombre-entrega'>{Elemento}  {Color}</div>} position="right center">
                                                <div className='pop-Up-Intrucciones'>
                                                    <h1>Instrucciones</h1>
                                                    <p>{Instruccion}</p>
                                                </div>
                                            </Popup>
                                        </td>

                                        <td>{botonEntrega(PuntajeVideojuego, Sub_ID)}</td>

                                        <td>{verifEntrega(PuntajeEntrega)}</td>
                                        <td>{verifEntrega(PuntajeVideojuego)}</td>
                                        <td>100</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                                    
                    
                </div>




            </div>

        </div>

        
    )
}

export default EntregasSuper