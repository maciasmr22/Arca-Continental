import React, { useEffect, useState } from 'react'
import { ApiUrlXD } from '../../const/global'
import "./SubirKPIS.css"

function SubirKPIS() {
    const [operCerti, setOperCerti] = useState();
    const [operTotal, setOperTotal] = useState();
    const [showOperarios, setShowOperarios] = useState(false);
    const [showKPIS, setShowKPIS] = useState(false);
    const [revisadoA, setRevisadoA] = useState();

    const idU = localStorage.getItem("usId");


    //hooks para los kpis porcentuales

    const [mejorasImp, setMejorasImp] = useState();

    const [mjMinParoST, setMjMinParoST] = useState();
    const [mjMinParoCT, setMjMinParoCT] = useState();
    const [porMinParco, setPorMinParco] = useState();

    const [mjEnvDesST, setMjEnvDesST] = useState();
    const [mjEnvDesCT, setMjEnvDesCT] = useState();
    const [porMiEnvDes, setPorMiEnvDes] = useState();


    const [mjMinCamForST, setMjMinCamForST] = useState();
    const [mjMinCamForCT, setMjMinCamForCT] = useState();
    const [porMjMinCamFor, setPorMjMinCamFor] = useState();

    useEffect(() => {

        fetch(ApiUrlXD + `getSupervisor/${idU}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((json) => {
                setOperCerti(json.sup[0].NumOperadores);
                setOperTotal(json.sup[0].Operarios_Totales);
                setPorMinParco(json.sup[0].Mjrs_Mins_Paro_Porcentaje);
                setPorMiEnvDes(json.sup[0].Mjrs_Envs_Dsechds_Porcentaje);
                setPorMjMinCamFor(json.sup[0].Mjrs_Mins_CambioFormato_Porcentaje);
                setMejorasImp(json.sup[0].Mejoras_Implementadas);
                setRevisadoA(json.sup[0].Revisado);
            })

    }, [])

    const submitOper = async e => {
        e.preventDefault();
        const credentials = {
            operCerti,
            operTotal,
            idU
        }
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(ApiUrlXD + '/setOper', options)

    }

    const submitKPIS = async e => {
        e.preventDefault();

        setPorMinParco(((mjMinParoST - mjMinParoCT) / mjMinParoST) * 100);
        setPorMiEnvDes(((mjEnvDesST - mjEnvDesCT) / mjEnvDesST) * 100);
        setPorMjMinCamFor(((mjMinCamForST - mjMinCamForCT) / mjMinCamForST) * 100);

        const credentials = {
            mejorasImp,
            porMinParco,
            porMiEnvDes,
            porMjMinCamFor,
            idU
        }
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }

        fetch(ApiUrlXD + 'setMejoras', options);

    }


    return (
        <div className="Op-general">
            <div className="Op-certi">
                <button  type="button"  class="btn button-certi"  onClick={() => {
                    setShowOperarios(!showOperarios)
                }}>
                    <h5 className="title-op-certi">Captura de operarios certificados</h5>
                </button>

                {showOperarios ? (
                    <form className='form-op-certi' onSubmit={submitOper}>

                        <label className="textform-op-certi" htmlFor='iOperCerti'> Operarios Certificados</label>
                        <br />
                        <div className="esp-op-certi">
                            <input id="iOperCerti" type="number" defaultValue={operCerti}
                                min="0" max={operTotal}
                                onChange={e => setOperCerti(e.target.value)}
                            ></input>
                        </div>
                        <br />
                        <div className="inform-op-certi">
                            <label className="textform-op-certi" htmlfor='iOperTotal'> Operarios Totales </label>
                            <br />
                            <input id="ioperTotal" type="number" defaultValue={operTotal}
                                min="0"
                                onChange={e => setOperTotal(e.target.value)}
                            ></input>
                        </div>
                        <br />
                        
                        <button class="btn submit-op-certi" type="submit"> Subir </button>

                    </form>
                ) : <div></div>}
            </div>

            <div className="Op-mejoras">
                <button type="button" class="btn button-certi" onClick={() => {
                    setShowKPIS(!showKPIS)
                }}>
                    <h5 className="title-op-certi">Captura de mejoras en indicadores de procesos</h5>
                </button>

                {showKPIS ? (
                    <form onSubmit={submitKPIS}>
                        <div>
                            <br />
                            <label className="textform-op-certi2" htmlFor='mejoras'>Mejoras implementadas </label>
                            <input id="mejoras" type="number" min="0" required
                                onChange={e => setMejorasImp(e.target.value)}
                                defaultValue={mejorasImp}
                            ></input>
                            <br />

                        </div>
                        <br />
                        <div>
                            <p className="textform-op-certi2">Minutos de paro (mins/mes)</p>
                            
                            <input id="mdpST" placeholder="Medición sin TWI " type="number" min="0" required
                                onChange={e => setMjMinParoST(e.target.value)}
                            ></input>

                            <br />
                            <br/>
                            
                            <input id="mdpCT" placeholder="Medición con TWI " type="number" min="0" required
                                onChange={e => setMjMinParoCT(e.target.value)}
                            ></input>
                        </div>
                        <br />
                        <div>
                            <p className="textform-op-certi2">Envases desechados (tarimas/mes)​</p>
                            
                            <input id="edST" type="number" min="0" placeholder="Medición sin TWI " required
                                onChange={e => setMjEnvDesST(e.target.value)}
                            ></input>
                            <br />
                           <br/>
                            <input id="edCT" placeholder="Medición con TWI " type="number" min="0" required
                                onChange={e => setMjEnvDesCT(e.target.value)}
                            ></input>
                        </div>
                        <br />
                        <div>
                            <p className="textform-op-certi2">Minutos por cambio de formato (mins/mes)​</p>
                        
                            <input id="mpcfST" type="number" min="0"  placeholder="Medición sin TWI " required
                                onChange={e => setMjMinCamForST(e.target.value)}
                            ></input>
                            <br />
                            <br/>
                            <input id="mpcfCT" placeholder="Medición con TWI " type="number" min="0" required
                                onChange={e => setMjMinCamForCT(e.target.value)}
                            ></input>
                        </div>

                        <div className="Esp-button">
                            <button class="btn submit-op-certi" type="submit"> Subir</button>
                        </div>


                    </form >
                ) : (<div></div>)}

            </div >
            
            <br />
            <div className = "rev-op-certi">
                {(revisadoA == 0) ? (<p style={{ color: "#adb5bd" }}>No Revisado</p>) : (<p style={{ color: "#adb5bd" }}>Revisado</p>)}
            </div>
        </div>
    )
}

export default SubirKPIS