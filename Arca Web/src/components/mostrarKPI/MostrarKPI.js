import React, { useEffect, useState } from 'react'
import './MostrarKPI.css'
import bronc from './img/medallabronce.png'
import plat from './img/medallaplata.png'
import oro from './img/medallaoro.png'
import { ApiUrlXD } from '../../const/global'

function MostrarKPI() {
    const [ctCertiBronce, setCtCertiBronce] = useState();
    const [ctCertiPlata, setCtCertiPlata] = useState();
    const [ctCertiOro, setCtCertiOro] = useState();
    const [ctSuperTotales, setCtSuperTot] = useState();

    useEffect(() => {
        fetch(ApiUrlXD + 'getSumMedKPI')
            .then((resp) => {
                return (resp.json())
            })
            .then((json) => {
                setCtCertiBronce(json.cont[0].ctCertiBronce);
                setCtCertiPlata(json.cont[0].ctCertiPlata);
                setCtCertiOro(json.cont[0].ctCertiOro);
                setCtSuperTot(json.cont[0].ctSuperTotales);

            })

    }, [])

    return (
        <div className='MostrarKPIPAPA'>
            <div>


                <h3>Supervisores totales:  {ctSuperTotales} </h3>
                <br />

                <h2>Supervisores certificados</h2>

                <table className='tableNumCerti'>

                    <tr>
                        <td><img src={bronc} className='imgMedKPI' /></td>
                        <td><img src={plat} className='imgMedKPI' /> </td>
                        <td><img src={oro} className='imgMedKPI' /> </td>
                    </tr>
                    <tr>
                        <td>{ctCertiBronce}</td>
                        <td>{ctCertiPlata}</td>
                        <td>{ctCertiOro}</td>

                    </tr>

                </table>

               





            </div>
        </div>
    )
}

export default MostrarKPI