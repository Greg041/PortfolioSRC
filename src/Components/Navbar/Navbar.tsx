// React imports
import { useRef, useState, RefObject } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
// Local imports
import './Navbar.css';
import logo from '../../assets/logo.png';
import undeline from '../../assets/underline.svg';
import burgerIcon from '../../assets/burger_icon.svg';
import menuCloseIcon from '../../assets/close_menu.svg';


const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef: RefObject<HTMLUListElement> = useRef(null);

  const openMenu = () => {
    if (menuRef.current) menuRef.current.style.right = '0';
  }

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img src={burgerIcon} onClick={openMenu} alt="burger open menu icon" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menuCloseIcon} onClick={closeMenu} alt="Close menu icon" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>{menu === 'home' ? <img src={undeline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>Sobre mi</p>
          </AnchorLink>{menu === 'about' ? <img src={undeline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu('services')}>Servicios</p>
          </AnchorLink>{menu === 'services' ? <img src={undeline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p onClick={() => setMenu('portfolio')}>Portafolio</p>
          </AnchorLink>{menu === 'portfolio' ? <img src={undeline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contacto</p>
          </AnchorLink>{menu === 'contact' ? <img src={undeline} alt="underline" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Contáctame
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar