import './Contact.css';
import themePattern from '../../assets/theme_pattern.svg';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone.svg';
import locationIcon from '../../assets/location.svg';


const MyWork = (): JSX.Element => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h2>Contáctame</h2>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Hablemos</h2>
          <p>
            Actualmente estoy disponible para tomar nuevos proyectos, siéntete libre de mandarme un mensaje sobre 
            cualquier proyecto que tengas en mente. Estoy dispuesto a ayudarte a llevarlo a cabo.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailIcon} alt="" />
              <p>Gregoriazuaje04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneIcon} alt="" />
              <p>+58 4122023643</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Caracas, Venezuela</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Tu nombre</label>
          <input type="text" placeholder='Ingresa tu nombre' name="name" />
          <label htmlFor="">Tu correo</label>
          <input type="text" placeholder='Ingresa tu correo' name="email" />
          <label htmlFor="">Escribe tu mensaje</label>
          <textarea name="message" rows={8} placeholder="Ingresa tu mensaje"></textarea>
          <button type="submit" className="contact-submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default MyWork;