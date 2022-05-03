import React, { useEffect, useState } from 'react'

import "./EntregasSuper.css"
// para el popup que muestra las instrucciones del entregable 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//importamos las imagenes de medallas
import medBron from './img/medallabronce.png'
import medPla from './img/medallaplata.png'
import medOro from './img/medallaoro.png'
import medNada from './img/candado.png'
import ini from './img/inicio.png'

import { ApiUrlXD } from '../../const/global';




function EntregasSuper() {
    const [datSubNiv, setDatSubNiv] = useState();
    const idU = localStorage.getItem("usId")
    const [linkEntrega, setLinkEntrega] = useState("");
    const [supervisorID, setSupervisorID] = useState();

    const [certiBron, setCertiBron] = useState();
    const [certiPla, setCertiPla] = useState();
    const [certiOr, setCertiOr] = useState();


    function subirEntrega(e, idSub) {

        fetch(ApiUrlXD + `getSupervisor/${idU}`)
            .then((resp) => {
                return resp.json()

            })
            .then((json) => {
                console.log(json.sup[0])
                setSupervisorID(json.sup[0].Super_ID)
            })

        // supervisorID ya es 13


        const url = ApiUrlXD + "subirArch";
        const urlE = linkEntrega;
        const credentials = {
            supervisorID,
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

        fetch(url, options)
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

                    <form onSubmit={e => subirEntrega(e, Sub_id)} >
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

    function verifFecha(xd) {

        if (xd == null) {
            return "---"
        }
        return xd.slice(0, -14)

    }


    useEffect(() => {

        fetch(ApiUrlXD + `getSupervisor/${idU}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            setCertiBron(json.sup[0].CertiBronce);
            setCertiPla(json.sup[0].CertiPlata);
            setCertiOr(json.sup[0].CertiOro);
        })

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
        console.log("jasid " + certiBron)

        fetch(ApiUrlXD + 'getSubNiv', options)
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setDatSubNiv(actualData);
            })

    },[])


    return (
        <div className="container-entregas">
            <div className="title-entre">
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
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpotable">
                            {datSubNiv &&
                                datSubNiv.subNivel.map(({ Sub_ID, Instruccion, Color, Elemento, PuntajeEntrega, PuntajeVideojuego, Fecha, Comentario, Revisado }) =>
                                (
                                    <tr key={Sub_ID}>

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

                                        <td>
                                            <Popup trigger={<div className='nombre-entrega'>{verifEntrega(PuntajeEntrega)}</div>}>
                                                <div className='pop-Up-Intrucciones'>
                                                    <h1>Comentario</h1>
                                                    {Revisado ? (<p style={{ color: "green" }}>Revisado</p>) : (<p style={{ color: "red" }}>Falta revisar</p>)}
                                                    <p>{verifEntrega(Comentario)}</p>
                                                </div>
                                            </Popup>
                                        </td>
                                        <td>{verifEntrega(PuntajeVideojuego)}</td>
                                        <td>100</td>
                                        <td>{verifFecha(Fecha)}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <h1 className = "title-med-ent">Medallas</h1>

            <div class="container-med-ent"> 
            <div className="progress-container-med ">
            
            {certiBron ?  <div className="circle active"><img  className='medalla'  src = {ini}/> <div className="progress" id="uno"></div></div>:  <div className="circle active"><img  className='medalla'  src = {ini}/> </div>}
            {certiBron ?  <div className="circle active"><img  className='medalla'  src = {medBron}/> <div className="progress dos" ></div></div>:  <div className="circle"><img  className='medalla'  src = {medNada}/> </div>}
            {certiPla ? <div className="circle active"><img  className='medalla'  src = {medPla}/> <div className="progress tres" ></div></div> :  <div className="circle"><img  className='medalla'  src = {medNada}/> </div>}
            {certiOr ?  <div className="circle active"><img  className='medalla'  src = {medOro}/> <div className="progress cuatro" ></div></div> :  <div className="circle"><img  className='medalla'  src = {medNada}/> </div>}
        </div>
        </div>


        </div>


    )
}

export default EntregasSuper
