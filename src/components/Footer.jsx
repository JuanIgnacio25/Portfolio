import React from "react";
import {FaGithub , FaLinkedin , FaInstagramSquare} from 'react-icons/fa';
import {BsEnvelopeFill} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center">
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
          href="https://www.instagram.com/juani_colli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i><FaInstagramSquare/></i>
        </a>
        <a
          href="mailto:nachocolli1@gmail.com"
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
