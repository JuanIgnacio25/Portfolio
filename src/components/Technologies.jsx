import React from "react";
import { technologies } from "../constants";

const Technologies = () => {
  return (
    <section id="tecnologias" className="technologies container-fluid">
      <div className="technologies-container">
        <h1>Tecnologias</h1>
        <div className="row">
          {technologies.map((tech) => (
            <div className="grid-container col-xs-4 col-sm-4 col-md-4 col-lg-3" key={tech.id}>
              <div className="technologie">
                <i>{<tech.logo />}</i>
                <p>{tech.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
