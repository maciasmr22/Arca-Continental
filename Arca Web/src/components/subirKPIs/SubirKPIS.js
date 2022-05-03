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

        setPorMinParco(((mjMinParoST - mjMinParoCT)/mjMinParoST) * 100);
        setPorMiEnvDes(((mjEnvDesST - mjEnvDesCT)/mjEnvDesST) * 100);
        setPorMjMinCamFor(((mjMinCamForST - mjMinCamForCT)/mjMinCamForST) * 100);

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
        <div>
            <button onClick={() => {
                setShowOperarios(!showOperarios)
            }}>
                <h5>Captura de operarios certificados</h5>
            </button>

            {showOperarios ? (
                <form className='form-op-certi' onSubmit={submitOper}>

                    <label htmlFor='iOperCerti'> operarios certificados</label>
                    <br />
                    <input id="iOperCerti" type="number" defaultValue={operCerti}
                        min="0" max={operTotal}
                        onChange={e => setOperCerti(e.target.value)}
                    ></input>
                    <br />
                    <label htmlfor='iOperTotal'> operarios totales </label>
                    <br />
                    <input id="ioperTotal" type="number" defaultValue={operTotal}
                        min="0"
                        onChange={e => setOperTotal(e.target.value)}
                    ></input>
                    <br />
                    <button type="submit"> Subir </button>

                </form>
            ) : <div></div>}

            <button onClick={() => {
                setShowKPIS(!showKPIS)
            }}>
                <h5>Captura de mejoras en indicadores de procesos</h5>
            </button>

            {showKPIS ? (
                <form onSubmit={submitKPIS}>
                    <div>
                        <br/>
                        <label htmlFor='mejoras'>Mejoras implementadas </label>
                        <input id="mejoras" type="number" min = "0" required
                            onChange={e=> setMejorasImp(e.target.value)}
                            defaultValue={mejorasImp}
                        ></input>
                        <br />
                        
                    </div>
                    <br/>
                    <div>
                        <p>Minutos de paro (mins/mes)</p>
                        <label htmlFor='mdpST'>Medicion sin TWI  </label>
                        <input id="mdpST" type="number" min = "0" required
                            onChange={e=> setMjMinParoST(e.target.value)}
                        ></input>
                        <br />
                        <label htmlFor='mdpCT'>Medicion con TWI</label>
                        <input id="mdpCT" type="number" min = "0" required
                            onChange={e=>setMjMinParoCT(e.target.value)}
                        ></input>
                    </div>
                    <br />
                    <div>
                        <p>Envases desechados (tarimas/mes)​</p>
                        <label htmlFor='edST'>Medicion sin TWI  </label>
                        <input id="edST" type="number" min = "0" required
                            onChange={e=>setMjEnvDesST(e.target.value)}
                        ></input>
                        <br />
                        <label htmlFor='edCT'>Medicion con TWI</label>
                        <input id="edCT" type="number" min = "0"required
                            onChange={e=>setMjEnvDesCT(e.target.value)}
                        ></input>
                    </div>
                    <br />
                    <div>
                        <p>Minutos por cambio de formato (mins/mes)​</p>
                        <label htmlFor='mpcfST'>Medicion sin TWI  </label>
                        <input id="mpcfST" type="number" min = "0" required
                            onChange={e => setMjMinCamForST(e.target.value)}
                        ></input>
                        <br />
                        <label htmlFor='mpcfCT'>Medicion con TWI</label>
                        <input id="mpcfCT" type="number" min = "0" required
                            onChange={e => setMjMinCamForCT(e.target.value)}
                        ></input>
                    </div>
                    
                    <button type="submit"> Subir</button>


                </form>
            ) : <div></div>}

            
            {(revisadoA == 0) ? (<p style = {{color: "red"}}>No Revisado</p>) : (<p style = {{color:"green"}}>Revisado</p>)}
            

        </div>
    )
}

export default SubirKPIS