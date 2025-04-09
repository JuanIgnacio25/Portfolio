import { FaGithub } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";

import { projects } from "../constants/index";

const Projects = () => {
  const project = projects[0];

  return (
    <section id="proyectos" className="projects-container">
        <h1 className="projects-title">Proyectos</h1>
        <div className="project-col">
          <div className="project">
            <img src={project.img} alt={`Proyecto ${project.id}`} />
            <div className="overlay">
              <div className="overlay-icons">
                <a
                  href={project.gitHub_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaGithub />
                  </i>
                </a>
                <a
                  href={project.deploy_url}
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
              <h3>{project.title}</h3>
              <p>{project.project_technologies}</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Projects;
