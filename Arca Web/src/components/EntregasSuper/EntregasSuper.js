import React, { useEffect, useState } from 'react'

import "./EntregasSuper.css"
// para el popup que muestra las instrucciones del entregable 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { ApiUrlXD } from '../../const/global';




function EntregasSuper() {
    const [datSubNiv, setDatSubNiv] = useState();


    useEffect(() => {

        fetch(ApiUrlXD + 'getSubNiv')
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setDatSubNiv(actualData);
            })

    }, [datSubNiv])


    return (
        <div className="entregacontent">
            <div className="tittleentre">
                <center><h1>Entregas</h1></center>
            </div>
            <div class="contentre justify-content-center">
                <div className="scrolltable1">


                    <table className="table">
                        <thead className="encabetable">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Estado</th>
                                <th scope="col">P. entrega</th>
                                <th scope="col">P. juego</th>
                                <th scope="col">De</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpotable">
                            {datSubNiv &&
                                datSubNiv.subNivel.map(({ Sub_ID, Instruccion, Color, Elemento }) =>
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
                                        <td>Guanajuato</td>
                                        <td>100</td>
                                        <td>80</td>
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