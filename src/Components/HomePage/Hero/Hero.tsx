import AnchorLink from 'react-anchor-link-smooth-scroll'
// Local imports
import './Hero.css'
import profileImg from 'src/assets/profile-img.jpg'


const Hero = (): JSX.Element => {
  const yearsActive: number = new Date().getFullYear() - 2021;

  return (
    <div id="home" className='hero'>
      <img src={profileImg} alt="imagen de perfil" />
      <h1><span>Soy Gregori Azuaje Cabanerio,</span> desarrollador de software y web con Python y Javascript</h1>
      <p>
        Desarrollador en Python con más de {yearsActive + 1} años de experiencia programando y más de {yearsActive} años de experiencia laboral. He trabajado en proyectos personales y
        profesionales usando tecnologías como Django, Django Rest Framework, Pandas, numpy, cv2, pyautogui, tkinter, React, Typescript, entre otras.

        Enfocado en el desarrollo backend de aplicaciones web a través de Django y Django Rest Framework, sin embargo también tengo más de {yearsActive - 1} años de experiencia
        desarrollando con Javascript, Nestjs, React y Typescript para aportar un abanico general de herramientas para el desarrollo 
        de una web estándar o SPA.

        En constante aprendizaje y desarrollo de mis habilidades para aportar los mejores estándares a nivel de desarrollo a mis clientes.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Contáctame
          </AnchorLink>
        </div>
        <div className="hero-resume">Mi resumen</div>
      </div>
    </div>
  )
}

export default Hero