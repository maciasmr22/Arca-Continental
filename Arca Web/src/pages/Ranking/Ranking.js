import React from "react";
import { useState, useEffect } from 'react';

//import de las imagenes
import jiPic from "./img/jipic.png";
import jmPic from "./img/jmpic.png";
import jrPic from "./img/jrpic.png";
import twiPic from "./img/twipic.png";
//import upIcon from "./img/uparrowicon.png";
import candado from './img/candado.png';
import medOro from './img/medallaoro.png';
import medPlat from './img/medallaplata.png';
import medBron from './img/medallabronce.png';

import "./Ranking.css";

import {ApiUrlXD} from '../../const/global';

function Ranking() {
    const [que, setQue] = useState("rankTWI");
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    const [data4, setData4] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataXd, setDataxd] = useState(null);
    let x = 1;


    // funciones para las imagenes de medallas 
    function Oro(xd) {
        if (xd === 0) {
            return candado;
        }
        else {
            return medOro;
        }
    }
    function Plata(xd) {
        if (xd === 0) {
            return candado;
        }
        else {
            return medPlat;
        }
    }
    function Bronce(xd) {
        if (xd === 0) {
            return candado;
        }
        else {
            return medBron;
        }
    }


    useEffect(() => {
        fetch(ApiUrlXD+`rankTWI`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
        fetch(ApiUrlXD+`rankJI`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData2(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData2(null);
            })
            .finally(() => {
                setLoading(false);
            });
        fetch(ApiUrlXD+`rankJM`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData3(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData3(null);
            })
            .finally(() => {
                setLoading(false);
            });
        fetch(ApiUrlXD+`rankJR`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData4(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData4(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="main_content_ranking">
            <div className="shadow-lg" >
                <div className="card">
                    <div className="card-header">
                        <h1 className="ranking-titulo">Ranking</h1>
                    </div>
                    <div className="card-body">


                        <div className="row">

                            <div className="col">
                                <img className="img-Elementos-TWI" src={jiPic} alt="Imágen de JI" onClick={() => {
                                    setQue("rankJI")
                                    setDataxd(data2)
                                }} />
                            </div>
                            <div className="col">
                                <img className="img-Elementos-TWI" src={jmPic} alt="Imágen de JM" onClick={() => {
                                    setQue("rankJM")
                                    setDataxd(data3)

                                }} />
                            </div>
                            <div className="col">
                                <img className="img-Elementos-TWI" src={jrPic} alt="Imágen de JR" onClick={() => {
                                    setQue("rankJR")
                                    setDataxd(data4)
                                }} />
                            </div>
                            <div className="col">
                                <img className="img-Elementos-TWI" src={twiPic} alt="Imágen de TWI" onClick={() => {
                                    setQue("rankTWI")
                                    setDataxd(data)
                                }} />
                            </div>


                        </div>


                    </div>
                </div>
                <div className="card text-center">
                    <h1 className="textotwi">{que.slice(4,)}</h1>
                    {loading && <div>A moment please...</div>}
                    {error && (
                        <div>{`There is a problem fetching the post data - ${error}`}</div>
                    )}
                    <div className="table-responsive">
                        <table className=" table table-striped table-bordered mb-" width="100%">
                            <thead className="ranktablehead">
                                <tr>
                                    <th scope="col">Posición</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Planta</th>
                                    <th scope="col">Certificado Bronce</th>
                                    <th scope="col">Certificado Plata</th>
                                    <th scope="col">Certificado Oro</th>
                                    <th scope="col">Puntaje</th>
                                </tr>
                            </thead>


                            {dataXd &&
                                dataXd.rank.map(({ Nombre, Planta, CertiBronce, CertiPlata, CertiOro, SumPuntaje }) => (

                                    <tr className="contenido-tabla" >
                                        <th className={"pos" + x} scope="row">{x++}</th>
                                        <td>{Nombre} </td>
                                        <td>{Planta}</td>
                                        <td><img className="img-med" src={Bronce(CertiBronce)} alt="Medalla Arca Bronce" /></td>
                                        <td><img className="img-med" src={Plata(CertiPlata)} alt="Medalla Arca Plata" /></td>
                                        <td><img className="img-med" src={Oro(CertiOro)} alt="Medalla Arca Oro" /></td>
                                        <td>{SumPuntaje}</td>

                                    </tr>

                                ))}
                        </table>
                    </div>
                </div>
            </div>
            {/*<a href="#Top"><img className="img-To-Top" src={upIcon} /></a>*/}
        </div>

    );

}


export default Ranking
