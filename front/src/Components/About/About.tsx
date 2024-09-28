// Local imports
import './About.css'
import profileImg from '../../assets/profile-img.jpg'
import themePattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div className='about'>
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
              Tengo más de 2 años de experiencia laboral trabajando como Backend Developer con Django como mi framework estrella y más de 2 años  
              trabajando con Javascript, CSS y React cumpliendo el papel de Full Stack developer.
            </p>
            <p>
              Mi pasión por el desarrollo de software y web me ha llevado a trabajar en proyectos personales y profesionales, usando una gran variedad
              de librerías para poder cumplir con los requerimientos de cada proyecto.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>
                Python
              </p>
              <hr style={{width: '80%'}} />
            </div>

            <div className="about-skill">
              <p>
                Django
              </p>
              <hr style={{width: '70%'}} />
            </div>

            <div className="about-skill">
              <p>
                HTML & CSS
              </p>
              <hr style={{width: '60%'}} />
            </div>

            <div className="about-skill">
              <p>
                Javascript
              </p>
              <hr style={{width: '60%'}} />
            </div>

            <div className="about-skill">
              <p>
                React
              </p>
              <hr style={{width: '40%'}} />
            </div>
            
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h2>+2</h2>
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