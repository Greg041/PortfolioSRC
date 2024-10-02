import './Footer.css';
import footerLogo from '../../assets/logo.png';


const Footer = (): JSX.Element => {
  return (
    <div id="footer" className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="footer logo" />
          <p>
            Soy un desarrollador web full stack con más de 2 años de experiencia en lenguajes y tecnologías como Python, Javascript, Django, React, PostgreSQL,
            entre otros. Si tienes un proyecto en mente, no dudes en contactarme. 
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Gregori Azuaje - Todos los derechos reservados
        </p>
        <div className="footer-bottom-right">
          <p>Términos de servicios</p>
          <p>Política de privacidad</p>
          <p>Conecta conmigo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;