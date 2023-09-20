import React from "react";
import Cv from "../downloads/CvJuanIgnacioColli.pdf";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="about-me container-fluid">
      <div className="about-me-container">
        <div className="about-me-title">
          <h1>Sobre Mi</h1>
          <a href={Cv} target="_blank">
            <button className="cv-button">Descargar CV</button>
          </a>
        </div>
        <div className="about-me-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            vitae molestiae blanditiis quidem reprehenderit autem quasi ratione
          </p>
          <p>
            ullam, eveniet sed? Minima maiores itaque qui vel consectetur illum
            officiis doloribus earum?Lorem ipsum dolor sit amet, consectetur
          </p>
          <p>
            adipisicing elit. Doloribus quaerat ullam voluptatem adipisci nulla
            ex vitae quis deleniti fugit! Dolor esse dolore eius facilis
            adipisci id suscipit quo ducimus excepturi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nemo ipsa magni velit eaque
            assumenda culpa distinctio eos facilis dicta sapiente accusamus
            eius, excepturi est quia corporis repellat vitae autem nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            porro numquam itaque asperiores sint perspiciatis dolore a accusamus
            iure, et veritatis facere ea illum pariatur voluptatibus labore modi
            dolorem architecto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
