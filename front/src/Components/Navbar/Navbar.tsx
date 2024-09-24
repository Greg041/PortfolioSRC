import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo"/>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Sobre mi</li>
        <li>Servicios</li>
        <li>Portafolio</li>
        <li>Contacto</li>
      </ul>
      <div className="nav-connect">
        Conecta conmigo
      </div>
    </div>
  )
}

export default Navbar