import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";

import {projects} from "../constants/index"

const ProjectSlider = () => {
  const settings = {
    dots: true, // Muestra los indicadores
    infinite: true, // Ciclo infinito
    speed: 800, // Velocidad del slide
    slidesToShow: 1, // Cantidad de proyectos visibles (ajusta según necesidad)
    slidesToScroll: 1, // Cuántos proyectos avanza por click
    responsive: [
      {
        breakpoint: 1024, // Para tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Para móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="proyectos" className="container text-center projects-container">
      <h1>Proyectos</h1>
      <Slider {...settings} className="project-slider-container">
        {projects.map((proj) => (
          <div className="project-col" key={proj.id}>
            <div className="project">
              <img src={proj.img} alt={`Proyecto ${proj.id}`} />
              <div className="overlay">
                <div className="overlay-icons">
                  <a href={proj.gitHub_url} target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaGithub />
                    </i>
                  </a>
                  <a href={proj.deploy_url} target="_blank" rel="noopener noreferrer">
                    <i>
                      <SiSimilarweb />
                    </i>
                  </a>
                </div>
              </div>
              <div className="project-description">
                <h3>{proj.title}</h3>
                <p>{proj.project_technologies}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default ProjectSlider;
