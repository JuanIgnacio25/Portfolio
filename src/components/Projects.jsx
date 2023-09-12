import React from "react";
import {FaGithub} from 'react-icons/fa';
import {SiSimilarweb} from 'react-icons/si'
import proyectoEc from "../assets/proyecto-ec.png";
import proyectoEc2 from "../assets/proyecto-ec2.png";

const Projects = () => {
  return (
    <section id="proyectos" className="projects container-fluid">
      <h2>Mis Proyectos recientes</h2>

      <div className="container text-center projects-container">
        <div className="row">
          <div className="col project-col">
            <div className="project">
              <img src={proyectoEc} alt="Proyecto 1" />
              <div className="overlay">
                <div className="overlay-icons">
                  <a
                    href="https://github.com/JuanIgnacio25/CoderHouse-ProyectoFinal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><FaGithub/></i>
                  </a>
                  <a
                    href="https://ecommercejuanignaciocolli-nachocolli1.b4a.run/productos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><SiSimilarweb/></i>
                  </a>
                </div>
              </div>
              <div className="project-description">
                <h3>E-Commerce</h3>
                <p>
                  Node.js, Express.js, MongoDB, Mongoose , Handlebars ,
                  Bootstrap 5 , JWT , socket.io , Bcrypt
                </p>
              </div>
            </div>
          </div>
          <div className="col project-col">
            <div className="project">
              <img src={proyectoEc2} alt="Proyecto 2" />
              <div className="overlay">
                <div className="overlay-icons">
                  <a
                    href="https://github.com/JuanIgnacio25/CoderHouse-ProyectoFinal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><FaGithub/></i>
                  </a>
                  <a
                    href="https://ecommercejuanignaciocolli-nachocolli1.b4a.run/productos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><SiSimilarweb/></i>
                  </a>
                </div>
              </div>
              <div className="project-description">
                <h3>E-Commerce</h3>
                <p>
                  Node.js, Express.js, MongoDB, Mongoose , Handlebars ,
                  Bootstrap 5 , JWT , socket.io , Bcrypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
