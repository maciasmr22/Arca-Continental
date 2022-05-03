import React, { useEffect } from 'react'
import './MostrarKPI.css'
import bronc from './img/medallabronce.png'
import plat from './img/medallaplata.png'
import oro from './img/medallaoro.png'

function MostrarKPI() {

    useEffect(() =>{
        

    })

    return (
        <div>
            <ul className='listMedKPI'>
                <li><img src={bronc} className='imgMedKPI'/>    </li>
                <li><img src={plat} className='imgMedKPI'/> </li>
                <li><img src={oro} className='imgMedKPI'/></li>
            </ul>
            

        </div>
    )
}

export default MostrarKPI