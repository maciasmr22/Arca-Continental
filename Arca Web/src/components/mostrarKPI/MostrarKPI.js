import React, { useEffect, useState } from 'react'

import PieChartCerti from '../Graficas/PieChartCerti'

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

    //hooks para los pies
    const [pieBronc, setPieBronc] = useState(false);
    const [piePlat, setPiePlat] = useState(false);
    const [pieOro, setPieOro] = useState(false);


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


                <h3 className = "title-st">Supervisores totales:  {ctSuperTotales} </h3>
                
                <hr></hr>
                <h2 className = "title-sc">Supervisores certificados</h2>

                <table className='tableNumCerti'>

                    <tr>
                        <td><img src={bronc} className='imgMedKPI'
                            onClick={() => {
                                setPieBronc(true)
                                setPiePlat(false)
                                setPieOro(false)
                            }}

                        /></td>
                        <td><img src={plat} className='imgMedKPI'
                            onClick={() => {
                                setPieBronc(false)
                                setPiePlat(true)
                                setPieOro(false)
                            }}
                        /> </td>
                        <td><img src={oro} className='imgMedKPI'
                            onClick={() => {
                                setPieBronc(false)
                                setPiePlat(false)
                                setPieOro(true)
                            }}
                        /> </td>
                    </tr>
                    <tr>
                        <td className = "text-sc">{ctCertiBronce}</td>
                        <td className = "text-sc">{ctCertiPlata}</td>
                        <td className = "text-sc">{ctCertiOro}</td>

                    </tr>


                </table>
                <hr></hr>
                {pieBronc ? <div>
                    <h2 className = "text-sc"> Certificados bronce</h2>
                    <PieChartCerti total = {ctSuperTotales} nombre = "bronce" certi = {ctCertiBronce}/>
                </div> : <div></div>}

                {piePlat ? <div>
                    <h2 className = "text-sc"> Certificados plata</h2>
                    <PieChartCerti total = {ctSuperTotales} nombre = "plata" certi = {ctCertiPlata} />
                </div> : <div></div>}

                {pieOro ? <div>
                    <h2 className = "text-sc"> Certificados oro</h2>
                    <PieChartCerti total = {ctSuperTotales} nombre = "oro" certi = {ctCertiOro}/>
                </div> : <div></div>}

                








            </div>
        </div>
    )
}

export default MostrarKPI