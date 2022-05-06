import React, { useEffect, useState } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import arcaLogo from './arcaLogo.png';


const Toolbar = props => {
    const [xd, setXd] = useState(false)
    
    useEffect (() => {
        if (localStorage.getItem("tipoU") === "Supervisor") {
            setXd(true)
        } else {
            setXd(false)
        }
    },[])

    return (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                <Link to='/'><img className="logo" src={arcaLogo} alt="Logo de Arca" /></Link>
            </div>
            <div className="spacer" />
            
            <div className="toolbar-nav-items">
                <ul>

                    <li>
                        {xd? <Link className="text-link" to='/profile'><FaUserAlt /></Link> : <div></div>}
                        
                    </li>

                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Toolbar;