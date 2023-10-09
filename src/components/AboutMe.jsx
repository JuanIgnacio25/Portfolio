import React from "react";
import Cv from "../downloads/CvJuanIgnacioColli.pdf";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="about-me container-fluid">
      <div className="about-me-container">
        <div className="about-me-title">
          <h1>Sobre Mi</h1>
          <a href={Cv} target="_blank">
            <button className="cv-button">Curriculum</button>
          </a>
        </div>
        <div className="about-me-description">
          <p>
            ¡Hola! Soy{" "}
            <span className="about-me-highlighted-text">
              Juan Ignacio Colli
            </span>
            , un apasionado Desarrollador Web Full stack con enfoque en el{" "}
            <span className="about-me-highlighted-text">MERN Stack</span>.
            Comencé hace un tiempo en el mundo de la programación, enfocándome
            en el backend, y en esta última etapa de mi aprendizaje, quise
            incorporar frontend a mis habilidades usando React."
          </p>
          <p>
            Soy una persona muy{" "}
            <span className="about-me-highlighted-text">curiosa</span> que busca
            constantemente{" "}
            <span className="about-me-highlighted-text">nuevos desafíos</span>,
            incorporando tecnologías y habilidades a mi conjunto de
            conocimientos. Dado que el mundo de la programación es tan grande,
            estoy siempre aprendiendo algo nuevo.
          </p>
          <p>
            Tengo facilidad para{" "}
            <span className="about-me-highlighted-text">
              trabajar en equipo
            </span>
            , siempre me gusta aportar, buscando y proponiendo soluciones a los
            problemas que se van presentando al momento de encarar proyectos.
          </p>

          <p>
            Cuando no estoy frente a la computadora, me gusta mantenerme activo.
            El gimnasio es mi lugar de escape, donde descargo tensiones. Además,
            soy un amante de la música, tocar el bajo es mi manera de expresar
            mi creatividad y relajarme.
          </p>

          <p>
            La vida social también es esencial para mí. Disfruto pasar tiempo
            con mis amigos, mi familia y mi novia, compartiendo momentos y
            experiencias. En casa, tengo la compañía de tres gatos encantadores
            que hacen que cada día sea más alegre.
          </p>
          <p>
            Mi objetivo es{" "}
            <span className="about-me-highlighted-text">
              convertirme en un exitoso Desarrollador Web
            </span>
            , continuamente mejorando mis habilidades y desarrollando mi carrera
            profesional.
          </p>
          <p>
            Gracias por visitar mi página y conocer un poco más sobre mí.
            ¡Espero tener la oportunidad de colaborar contigo en futuros
            proyectos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
