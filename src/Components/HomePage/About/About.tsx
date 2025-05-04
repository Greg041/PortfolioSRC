// Local imports
import './About.css'
import profileImg from 'src/assets/profile-img.jpg'
import themePattern from 'src/assets/theme_pattern.svg'
import Skill from './Skills'


const About = () => {
  const yearsActive: number = new Date().getFullYear() - 2021;

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>Sobre mi</h2>
        <img 
        src={themePattern} 
        alt="" 
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="profile about image" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Tengo más de {yearsActive} años de experiencia laboral trabajando como Backend Developer con Django como mi framework estrella y más de {yearsActive - 1} años  
              trabajando con Javascript y Typescript, CSS y React cumpliendo el papel de Full Stack developer.
            </p>
            <p>
              Mi pasión por el desarrollo de software y web me ha llevado a trabajar en proyectos personales y profesionales, usando una gran variedad
              de tecnologías para poder cumplir con los requerimientos de cada proyecto.
            </p>
          </div>

          <div className="aboutlSkill">
            <Skill skillName='Python' skillMastery={80} />
            <Skill skillName='Django' skillMastery={70} />
            <Skill skillName='Javascript' skillMastery={80} />
            <Skill skillName='Typescript' skillMastery={70} />
            <Skill skillName='Express' skillMastery={50} />
            <Skill skillName='Nestjs' skillMastery={70} />
            <Skill skillName='React' skillMastery={40} />
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h2>+{yearsActive}</h2>
            <p>
              años de experiencia laboral
            </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h2>+10</h2>
            <p>
              proyectos completados
            </p>
          </div>
        </div>
    </div>
  )
}

export default About