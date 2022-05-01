import React, { useEffect, useState } from 'react'

function EntregasSuper() {
    const [datSubNiv, setDatSubNiv] = useState();

    useEffect(() => {

        fetch('http://localhost:3001/users/getSubNiv')
            .then((response) => {
                return response.json();
            })
            .then((actualData) => {
                setDatSubNiv(actualData);
            })

    })


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
                                datSubNiv.subNivel.map(({ Sub_ID, Instruccion, Color, Elemento }) => (
                                    <tr>
                                        <th scope="row">{Sub_ID}</th>
                                        <td>{`${Elemento}  ${Color}`}</td>
                                        <td><button type="button" class="btn btn-sm" >Ver Instrucciones</button></td>
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