import { FormEvent } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
// Local imports
import './Contact.css';
import themePattern from '../../assets/theme_pattern.svg';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone.svg';
import locationIcon from '../../assets/location.svg';
import github from '../../assets/github.svg';
import gitlab from '../../assets/gitlab.svg';
import linkedin from '../../assets/linkedin.svg';


const Contact = (): JSX.Element => {

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "dc5e834b-388c-4f5c-8710-a9cb7e7c1faf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div id="contact" className='contact'>
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
            <div className="contact-social">
              <AnchorLink href="https://www.linkedin.com/in/gregori-azuaje-cabanerio/">
                <img src={linkedin} alt="linkedin-link" />
              </AnchorLink>

              <AnchorLink href="https://github.com/Greg041">
                <img src={github} alt="github-link" />
              </AnchorLink>

              <AnchorLink href="https://gitlab.com/Greg041">
                <img src={gitlab} alt="gitlab-link" style={{ color: 'white' }} />
              </AnchorLink>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
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

export default Contact;