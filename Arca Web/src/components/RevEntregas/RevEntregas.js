import React from 'react'
import { ApiUrlXD } from '../../const/global'

// para el popup que muestra las instrucciones del entregable 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//importamos las imagenes de medallas
import medBron from './img/medallabronce.png'
import medPla from './img/medallaplata.png'
import medOro from './img/medallaoro.png'
import medNada from './img/candado.png'
import ini from './img/inicio.png'
import { useState } from 'react';
import { useEffect } from 'react';

import "./RevEntregas.css";

function RevEntregas(props) {
    const idU = props.usId;

    const [datSubNiv, setDatSubNiv] = useState();
    const [idSup, setIdSup] = useState(); // id Supervisor
    const [certiBron, setCertiBron] = useState();
    const [certiPla, setCertiPla] = useState();
    const [certiOr, setCertiOr] = useState();

    //hooks para calificar

    const [nuevaCali, setNuevaCali] = useState();
    const [nuevoCom, setNuevoCom] = useState();

    //Hooks para medallas

    const [calificaciones, setCalificaciones] = useState();

    function verifFecha(xd) {

        if (xd === null) {
            return "---"
        }
        return xd.slice(0, -14)

    }

    function certificarMedalla(superviId, colorcert) {
        let credentials = {
            superviId,
            colorcert
        }
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(ApiUrlXD + "revisaCertificaciones", options)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setCalificaciones(json.certi)
            })
        if (!calificaciones) {
            console.log("Recibiendo datos...")
        } else {
            if (calificaciones.length === 4) {
                if (calificaciones[0].PuntajeEntrega >= 70 &&
                    calificaciones[1].PuntajeEntrega >= 70 &&
                    calificaciones[2].PuntajeEntrega >= 70 &&
                    calificaciones[3].PuntajeEntrega >= 70) {
                        console.log(superviId)
                    if (colorcert == "Bronce") {
                        fetch(ApiUrlXD + `certificarBronce/${superviId}`)
                            
                    } else if (colorcert === "Plata") {
                        fetch(ApiUrlXD + `certificarPlata/${superviId}`)
                            
                    } else if (colorcert === "Oro") {
                        fetch(ApiUrlXD + `certificarOro/${superviId}`)
                            
                    }
                }
            }
        }
    }

    function handleCalificar(e, com, cali, subniv, color) {
        e.preventDefault();

        // en el siguiente fetch sacamos el id del supervisor para poderlo usar en el proximo fetch
        fetch(ApiUrlXD + `getSupervisor/${idU}`)
            .then((resp) => {
                return resp.json()

            })
            .then((json) => {
                setIdSup(json.sup[0].Super_ID)
            })



        let credentials = {
            com,
            cali,
            subniv,
            idSup
        }

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(ApiUrlXD + `calificar`, options)

        

    }

    function veriBotonEntrega(rev, pVid, subniv, color) {


        let c;
        if (rev == 1) {
            c = "green"
        }
        else {
            c = "red"
        }


        if (pVid < 70) {
            return (
                <button className = "button-reventregas" disabled>Calificar</button>
            );
        }

        return (

            <Popup className = "popup-formrev" trigger={
                <button type="button"  class="btn button-certi"  >
                    Calificar
                </button>}>
                <div className='popUp-ccalificar'>
                   
                    <form onSubmit={e => handleCalificar(e, nuevoCom, nuevaCali, subniv, color)}>
                        <div className = "container-comentrev">
                            <input className = "comentario-reventregas" type="text" id="comentarioXD" placeholder="Comentarios"
                                onChange={e => setNuevoCom(e.target.value)}
                            ></input>
                        </div>

                        <div className = "container-comentrev">
                            <input type="number" max="100" min="0" placeholder="Calificacion"
                                onChange={e => setNuevaCali(e.target.value)}
                            ></input>
                        </div>

                        <div className = "container-button2">
                            <button type="button"  class="btn button-certi"  type='submit'>
                                calificar
                            </button>
                        </div>

                    </form>

                </div>
            </Popup>
        );



    }


    function verEntrega(rev, pVid, color, elemento, arch) {

        if (pVid < 70) {
            return (
                <p style={{ color: "grey" }}>{color}  {elemento} </p>
            );
        }

        if (rev == 1) {
            return (
                <a href={arch} target="_blank" style={{ color: "green" }}>{color}  {elemento} </a>
            );
        }
        else {
            return (
                <a href={arch} target="_blank" style={{ color: "red" }}>{color}  {elemento} </a>
            );
        }

    }

    function verifEntrega(xd) {

        if (xd === null) {
            return "---"
        }
        return xd

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

        fetch(ApiUrlXD + 'getSubNiv', options)
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setDatSubNiv(actualData);
            })

    }, [])

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

                                <th scope="col">Calificacion</th>
                                <th scope="col">P. Juego</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">______</th>


                            </tr>

                        </thead>
                        <tbody className="cuerpotable">
                            {datSubNiv &&
                                datSubNiv.subNivel.map(({ Sub_ID, Color, Elemento, PuntajeEntrega, PuntajeVideojuego, Fecha, Comentario, Revisado, Archivo }) => (


                                    <tr key={Sub_ID}>

                                        <th scope="row">{Sub_ID}</th>

                                        <td>{verEntrega(Revisado, PuntajeVideojuego, Color, Elemento, Archivo)}</td>


                                        <td>{PuntajeEntrega}</td>
                                        <td>{verifEntrega(PuntajeVideojuego)}</td>
                                        <td>{verifFecha(Fecha)}</td>


                                        <td>{veriBotonEntrega(Revisado, PuntajeVideojuego, Sub_ID, Color)}</td>





                                    </tr>



                                ))}

                        </tbody>
                    </table>


                </div>
            </div>

            <h1 className="title-med-ent">Medallas</h1>

            <div className="container-med-ent">
                <div className="progress-container-med ">
                    {certiBron ? <div className="circle active"><img className='medalla' src={ini} /> <div className="progress" id="uno"></div></div> : <div className="circle active"><img className='medalla' src={ini} /> </div>}
                    {certiBron ? <div className="circle active"><img className='medalla' src={medBron} /> <div className="progress dos" ></div></div> : <div className="circle"><img className='medalla' src={medNada} onClick={()=>{certificarMedalla(idU,"Bronce")}} /> </div>}
                    {certiPla ? <div className="circle active"><img className='medalla' src={medPla} /> <div className="progress tres" ></div></div> : <div className="circle"><img className='medalla' src={medNada} onClick={()=>{certificarMedalla(idU,"Plata")}}/> </div>}
                    {certiOr ? <div className="circle active"><img className='medalla' src={medOro} /> <div className="progress cuatro" ></div></div> : <div className="circle"><img className='medalla' src={medNada} onClick={()=>{certificarMedalla(idU,"Oro")}}/> </div>}


                </div>

            </div>


        </div>
    )
}

export default RevEntregas