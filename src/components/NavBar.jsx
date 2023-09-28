import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand" href="#">
            <img
              src="/LogoPortfolio.png"
              width="50px"
              alt="Logo J-ignacio de la barra de navegacion"
            />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi" aria-current="page">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
