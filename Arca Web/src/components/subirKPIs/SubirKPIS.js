import React, { useEffect, useState } from 'react'
import { ApiUrlXD } from '../../const/global'
import "./SubirKPIS.css"

function SubirKPIS() {
    const [operCerti, setOperCerti] = useState(50);
    const [operTotal, setOperTotal] = useState(100);

    useEffect(() => {

    },[])

    const submitOper = async e => {
        e.preventDefault();

    }
    

    return (
        <div>

            <form className='form-op-certi' onSubmit={submitOper}>
                <h5>Captura de operarios certificados</h5>
                <label htmlFor="operariosCertificados">Operarios Certificados</label><br/>
                <input type="number" id="operariosCertificados" min="0" max="500" defaultValue={operCerti} 
                onChange = {e => setOperCerti(e.target.value)}></input>
                <br/><label htmlFor="operariosTotales">Operarios Totales</label><br/>
                <input type="number" id="operariosTotales" min="0" max="500" defaultValue={operTotal} 
                onChange={e => setOperTotal(e.target.value)}></input>
                <br/><button type="submit">Subir</button>

            </form>



        </div>
    )
}

export default SubirKPIS