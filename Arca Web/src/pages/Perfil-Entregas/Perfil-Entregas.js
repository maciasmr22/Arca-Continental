import React from 'react'

import perfil from "./entregasimg/empresario.png"
import "./Perfil-Entregas.css"

function About() {
  return (

    <div class="list-groupentrepadre">
      <div className="perfilcontent">
        <div class="about-cont">
          <img src={perfil} class="img" alt='Foto de perfil'></img>
        </div>

        <div class="about-tex">

          <p>Nombre: Leopoldo Maximo</p>
          <p>Área: Seguridad </p>
          <p>Linea: Producción</p>
          <p>Planta: Monterrey</p>
          <p>CEDIS en la que se encuentra</p>
          <p>Correo: example@gmail.com</p>

        </div>
        <div class="progress-element">
          <p class="progress-label">JI</p>
          <div class="progress-container-1">
            <progress max="100" value="75">75%</progress>
          </div>
          <p class="progress-label-2">JM</p>
          <div class="progress-container-2">
            <progress max="100" value="25">25%</progress>
          </div>
          <p class="progress-label-3">JR</p>
          <div class="progress-container-3">
            <progress max="100" value="50">50%</progress>
          </div>
        </div>

      </div>
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
                  <th scope="col">Puntaje</th>
                  <th scope="col">De</th>

                </tr>
              </thead>
              <tbody className="cuerpotable">
                <tr>
                  <th scope="row">1</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>89</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>98</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>100</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>Entregado</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" >Entregar</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible  </button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Tarea de JM para la ....</td>
                  <td><button type="button" class="btn btn-sm" disabled>No disponible</button></td>
                  <td>---</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
