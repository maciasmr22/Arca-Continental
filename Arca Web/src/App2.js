import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Toolbar from './components/Toolbar/Toolbar';

import AboutUs from './pages/AboutUs/AboutUs';
import Inicio from './pages/Inicio/Inicio';
import PerfilEntregas from './pages/Perfil-Entregas/Perfil-Entregas';
import Ranking from './pages/Ranking/Ranking';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import PerfilAdmin from './pages Admin/PerfilAdmin/PerfilAdmin'
import PerfilSuper from './pages Admin/PerfilUsuario/PerfilSuper'
import Videojuego from "./pages/VideoJuego/Videojuego";

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });

  };

  render() {

    let backdrop;


    // Esto es para la sidebar
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }



    
    if(localStorage.getItem("tipoU") === "Administrador"){
      return (
        <div style={{ height: '100%' }}>
          <Router>
            
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main style={{ marginTop: '5%' }}>
            </main>
            <Routes>
              <Route exact path='/' element={<Inicio />} />
              <Route path='/profile' element={<PerfilAdmin />} />
              <Route path='/ranking' element={<Ranking />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path="/perfilSuper" element={<PerfilSuper/>}/>
            </Routes>
          </Router>
        </div>
      );
    }
    else if(localStorage.getItem("tipoU") === "Supervisor"){
      return (
        <div style={{ height: '100%' }}>
          <Router>
            
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main style={{ marginTop: '5%' }}>
            </main>
            <Routes>
              <Route exact path='/' element={<Inicio />} />
              <Route path='/profile' element={<PerfilEntregas />} />
              <Route path="/videojuego" element={<Videojuego />} />
              <Route path='/ranking' element={<Ranking />} />
              <Route path='/about-us' element={<AboutUs />} />
            </Routes>
          </Router>
        </div>
      );
    }
    else{
      return (
      <div>
        <h1> Error</h1>
      </div>
      );
    }


   
  }
}

export default App;