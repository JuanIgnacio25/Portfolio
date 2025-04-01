import React from "react";
import {FaGithub , FaLinkedin , FaWhatsapp} from 'react-icons/fa';
import {BsEnvelopeFill} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center footer">
      <div className="social-network-icons d-flex flex-wrap align-items-center justify-content-center">
        <a
          href="https://github.com/JuanIgnacio25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i><FaGithub/></i>
        </a>
        <a
          href="https://www.linkedin.com/in/juan-ignacio-colli-317696218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i><FaLinkedin/></i>
        </a>
        <a
          href="https://wa.me/5493471670274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i><FaWhatsapp/></i>
        </a>
        <a
          href="mailto:juanignaciocolli28@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i ><BsEnvelopeFill/></i>
        </a>
      </div>
      <div className="copyrights">
        <p>Creado por Juan Ignacio Colli (2023) &#169;</p>
      </div>
    </footer>
  );
};

export default Footer;
