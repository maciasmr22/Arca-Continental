import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import imgPred from './entregasimg/empresario.png'
import { ApiUrlXD } from '../../const/global'

import perfil from "./entregasimg/empresario.png"




function About() {
  const location = useLocation();
  const idU = location.state.usid;
  const [imagen, setImagen] = useState("");
  const [dataUs, setDataUs] = useState();
  const [datSup, setDatSup] = useState();
  
  async function recolectarData(){
    let response = await fetch(ApiUrlXD + `getSuUs/${idU}`)
    response = await response.json();
    setDataUs(response.SuUs[0]);

    

    let response3 = await fetch(ApiUrlXD + `imgPerfil/${idU}`)
    response3 = await response3.json();
    setImagen(response3.users[0].Imagen)

  }

  async function recDataSup(){
    let response2 = await fetch(ApiUrlXD + `getSupervisor/${idU}`);
    response2 = await response2.json();
    setDatSup(response2.sup[0])
  }

  useEffect(() => {
    recolectarData();
    recDataSup();

  },[])

  return (

    <div className="container-general">
      <div className="list-groupentrepadre">
        <div className="perfilcontent">
          <div className="about-cont">

            <img src={"https://drive.google.com/uc?export=view&id=" + imagen.slice(32).slice(0, -17)} className="img-Perfil-e"
              alt='Foto de perfil'
              onError={(e) => (
                e.target.onError = null, e.target.src = imgPred
              )}
            ></img>


          </div>


          <div className="about-tex">
            {dataUs ? <p>Nombre: {dataUs.Nombre}</p> : <div>Cargando...</div>}
            {dataUs ? <p>Correo: {dataUs.Correo}</p> : <div>Cargando...</div>}
            {dataUs ? <p>Planta: {dataUs.Planta}</p> : <div>Cargando..</div>}

          </div>

          <div className="mostrar-kpis">
            <table className='table'>
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>Datos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> Operarios certificados</th>
                  {datSup ? <td>{(datSup.NumOperadores/datSup.Operarios_Totales)*100} %</td> : <td>Cargando..</td>}                 
                </tr>

                <tr>
                  <th> Mejoras implementadas</th>
                  {datSup ? <td>{datSup.Mejoras_Implementadas}</td> : <td>Cargando..</td>}   
                </tr>

                <tr>
                  <th> Mejora mins de paro</th>
                  {datSup ? <td>{datSup.Mjrs_Mins_Paro_Porcentaje} %</td> : <td>Cargando...</td>}
                </tr>

                <tr>
                  <th> Mejora envases desechados</th>
                  {datSup ? <td>{datSup.Mjrs_Envs_Dsechds_Porcentaje} %</td> : <td>Cargando...</td>}
                </tr>

                <tr>
                  <th> Mejora minutos por cambio de formato</th>
                  {datSup ? <td>{datSup.Mjrs_Mins_CambioFormato_Porcentaje} %</td> : <td>Cargando...</td>}
                </tr>

              </tbody>
            </table>
            

            {datSup && !datSup.Revisado ? <button
              onClick={()=>{
                fetch(ApiUrlXD + `confirmarKPI/${idU}`, {
                  method: 'PUT'
                })
                .then((resp)=>{
                  return resp.json()
                })
                .then((json) => {
                  console.log("kaka" + json);
                })
                recDataSup();   
              }}
            >
                Confirmar datos de supervisor 
            </button> : <button disabled>
                Datos ya confirmados 
            </button>}
            

          </div>


        </div>

        <div className="entregas-perfil">

        </div>

      </div>
    </div>
  )
}

export default About
