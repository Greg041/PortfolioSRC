import React from "react";
import './Hero.css'
import profileImg from '../../assets/profile-img.jpg'


const Hero = () => {
  return (
    <div className='hero'>
      <img src={profileImg} alt="imagen de perfil" />
      <h1><span>Soy Gregori Azuaje Cabanerio,</span> desarrollador de software y web Python, Django</h1>
      <p>
        Llevo programando con Python desde hace más de 4 años y usando Javascript desde hace más de 2 años, he trabajado en proyectos personales y
        profesionales usando tecnologías como Pandas, numpy, cv2, pyautogui, tkinter, Django, Django Rest Framework, React, Typescript, entre otras.

        Enfocado en el desarrollo backend de aplicaciones web a través de Django y Django Rest Framework, sin embargo también soy capaz de 
        desarrollar en Javascript, con React y Typescript para aportar un abanico general de herramientas para el desarrollo 
        de una web estándar o SPA.

        En constante aprendizaje y desarrollo de mis habilidades para aportar los mejores estándares a nivel de desarrollo a mis clientes.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Conecta conmigo</div>
        <div className="hero-resume">Mi resumen</div>
      </div>
    </div>
  )
}

export default Hero