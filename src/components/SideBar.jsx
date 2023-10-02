import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare , FaEnvelope} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="left-sidebar">

          <a
            href="https://github.com/JuanIgnacio25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaGithub />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-colli-317696218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://www.instagram.com/juani_colli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaInstagramSquare />
            </i>
          </a>
          <a
            href="mailto:nachocolli1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaEnvelope />
            </i>
          </a>
        <div className="bar"></div>
      </div>
      <div className="right-sidebar">
        <a
          href="mailto:nachocolli1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>nachocolli1@gmail.com</p>
        </a>

        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SideBar;
