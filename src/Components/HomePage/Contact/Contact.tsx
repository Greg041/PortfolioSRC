import { FormEvent } from 'react';
// Local imports
import './Contact.css';
import themePattern from 'src/assets/theme_pattern.svg';
import emailIcon from 'src/assets/email-icon.svg';
import phoneIcon from 'src/assets/phone.svg';
import locationIcon from 'src/assets/location.svg';
import github from 'src/assets/github.svg';
import gitlab from 'src/assets/gitlab.svg';
import linkedin from 'src/assets/linkedin.svg';


const Contact = (): JSX.Element => {

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // disable the form submit button while the request is being made
    const submitButton = form.querySelector("button[type=submit]") as HTMLButtonElement;
    submitButton.disabled = true;
    const formData = new FormData(form);

    formData.append("access_key", "dc5e834b-388c-4f5c-8710-a9cb7e7c1faf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      submitButton.disabled = false;
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
              <img src={emailIcon} alt="email-icon" />
              <p>Gregoriazuaje04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneIcon} alt="phone-icon" />
              <p>+58 4122023643</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="location-icon" />
              <p>Caracas, Venezuela</p>
            </div>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/gregori-azuaje-cabanerio/" target='_blank' rel="noreferrer">
                <img src={linkedin} alt="linkedin-link" />
              </a>

              <a href="https://github.com/Greg041" target='_blank' rel="noreferrer"> 
                <img src={github} alt="github-link" />
              </a>

              <a href="https://gitlab.com/Greg041" target='_blank' rel="noreferrer">
                <img src={gitlab} alt="gitlab-link" style={{ color: 'white' }} />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="nameInput">Tu nombre</label>
          <input id="nameInput" type="text" placeholder='Ingresa tu nombre' name="name" />
          <label htmlFor="emailInput">Tu correo</label>
          <input id="emailInput" type="text" placeholder='Ingresa tu correo' name="email" />
          <label htmlFor="messageInput">Escribe tu mensaje</label>
          <textarea id="messageInput" name="message" rows={8} placeholder="Ingresa tu mensaje"></textarea>
          <button type="submit" className="contact-submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;