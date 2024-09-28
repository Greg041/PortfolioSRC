// Local imports
import './Services.css'
import themePattern from '../../assets/theme_pattern.svg'
import arrowIcon from '../../assets/arrow_icon.svg'


const Services = (): JSX.Element => {
  return (
    <div className='services'>
      <div className="services-title">
        <h2>Mis servicios</h2>
        <img src={themePattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        <div className="services-format">
          <h4>1</h4>
          <h3>Desarrollo web desde 0</h3>
          <p>
            Desarrollo de páginas o aplicaciones web desde 0 con Django, HTML, CSS, Javascript y/o React. 
            Desde la creación de la base de datos hasta el despliegue en un servidor.
          </p>
        </div>

        <div className="services-format">
          <h4>2</h4>
          <h3>Mantenimiento de páginas o aplicaciones web</h3>
          <p>
            Mantenimiento de páginas o aplicaciones web existentes, ya sea para corregir errores, agregar nuevas funcionalidades o mejorar el rendimiento.
          </p>
        </div>

        <div className="services-format">
          <h4>3</h4>
          <h3>Desarrollo y/o mantenimiento de API's</h3>
          <p>
            Desarrollo y/o mantenimiento de API's con Django Rest Framework para ser consumidas por aplicaciones web o móviles.
          </p>
        </div>

        <div className="services-format">
          <h4>4</h4>
          <h3>Desarrollo de software con Python</h3>
          <p>
            Desarrollo de software a medida con Python, ya sea para automatizar tareas, análisis de datos, desarrollo de scripts, entre otros.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services