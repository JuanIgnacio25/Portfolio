import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";
import { projects } from "../constants/index";

const Projects = () => {
  return (
    <section id="proyectos" className="projects container-fluid">
      <h1 className="project-title">Proyectos recientes</h1>

      <div className="container text-center projects-container">
        <div className="row">
          {projects.map((proj) => (
            <div className="col-md-12 col-lg-6 project-col" key={proj.id}>
              <div className="project">
                <img src={proj.img} alt={`Proyecto ${proj.id}`} />
                <div className="overlay">
                  <div className="overlay-icons">
                    <a
                      href={proj.gitHub_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <FaGithub />
                      </i>
                    </a>
                    <a
                      href={proj.deploy_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <SiSimilarweb />
                      </i>
                    </a>
                  </div>
                </div>
                <div className="project-description">
                  <h3>{proj.title}</h3>
                  <p>
                    {proj.project_technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
