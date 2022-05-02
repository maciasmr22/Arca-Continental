import React, { useEffect, useState } from 'react'
import { ApiUrlXD } from '../../const/global'
import "./SubirKPIS.css"

function SubirKPIS() {
    const [operCerti, setOperCerti] = useState();
    const [operTotal, setOperTotal] = useState();
    const [showOperarios, setShowOperarios] = useState(false);

    const idU = localStorage.getItem("usId");


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


    return (
        <div>
            <button onClick={() => {
                setShowOperarios(!showOperarios)
            }}>
                <h5>Captura de operarios certificados</h5>
            </button>

            {showOperarios ? (
                <form className='form-op-certi' onSubmit={submitOper}>

                    <label htmlFor="operariosCertificados">Operarios Certificados</label><br />
                    <input type="number" id="operariosCertificados" min="0" max="500"
                        defaultValue={operCerti}
                        onChange={e => setOperCerti(e.target.value)}></input>
                    <br /><label htmlFor="operariosTotales">Operarios Totales</label><br />
                    <input type="number" id="operariosTotales" min="0" max="500"
                        defaultValue={operTotal}
                        onChange={e => setOperTotal(e.target.value)}></input>
                    <br /><button type="submit" 
                        onClick={()=>{setShowOperarios(!showOperarios)}}
                    >Subir</button>

                </form>
            ) : <div></div>}




        </div>
    )
}

export default SubirKPIS