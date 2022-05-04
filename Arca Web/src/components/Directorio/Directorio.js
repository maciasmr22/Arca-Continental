import React, { useEffect, useState } from 'react';
import { ApiUrlXD } from '../../const/global';
import './Directori.css'

function Directorio() {
    const [datSupUs, setDatSupUs] = useState();
    const [buscNombre, setBuscNombre] = useState();

    useEffect(() => {
        fetch(ApiUrlXD + `getAllSuperUs/${buscNombre}`)
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                setDatSupUs(json);
            })

    }, [buscNombre])

    return (
        <div className="container-directorio">
            <div className="title-entre">
                <center><h1>Directorio</h1></center>
                
            </div>
            <div className='buscador'>
                <label>Buscar por nombre: </label>
                <input type="text" onChange={(e)=>{
                    setBuscNombre(e.target.value);

                }}></input>
            </div>

            <div className="contentre justify-content-center">
                <div className="scrolltable1">


                    <table className="table">

                        <thead className="encabetable">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Planta</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpotable">


                            {datSupUs &&
                                datSupUs.usSu.map(({ Nombre, Correo, Planta, Usuario_ID }) => (
                                    <tr key={Usuario_ID} className = "rowDir" onClick={()=>{
                                        console.log("jajassjhdasj");
                                    }}>
                                        <th scope="col">{Nombre}</th>
                                        <td scope="col">{Correo}</td>
                                        <td scope="col">{Planta}</td>
                                    </tr>
                                ))}

                        </tbody>


                    </table>



                </div>
            </div>
        </div>
    );
}

export default Directorio;