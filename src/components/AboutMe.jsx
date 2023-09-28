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
            ¡Hola! <span className="highlighted-text">Soy Juan Ignacio Colli</span>, un apasionado desarrollador web full
            stack con enfoque en el MERN stack. La tecnología es mi mundo y mi
            lienzo, donde transformo ideas en aplicaciones funcionales y
            atractivas. Mi trabajo se rige por la disciplina y la búsqueda
            constante de la excelencia.
          </p>
          <p>
            La organización y la atención al detalle son pilares fundamentales
            en mi vida. Creo firmemente que la estructura y la planificación son
            claves para el éxito, y esto se refleja en cada proyecto que abordo.
            Siempre estoy enfocado en mis objetivos, buscando la manera más
            eficiente de lograrlos.
          </p>

          <p>
            Cuando no estoy frente a la computadora, me gusta mantenerme activo.
            El gimnasio es mi lugar de escape, donde recargo energías y me
            mantengo en forma para el desafío diario del desarrollo web. Además,
            soy un amante de la música, tocar el bajo es mi manera de expresar
            mi creatividad y relajarme.
          </p>
          <p>
            La vida social también es esencial para mí. Disfruto pasar tiempo
            con mis amigos y mi novia, compartiendo risas y experiencias. En
            casa, tengo la compañía de tres gatos encantadores que hacen que
            cada día sea más alegre.
          </p>
          <p>
            Mi objetivo es convertirme en un exitoso programador, creciendo
            constantemente en mis habilidades y contribuyendo al mundo de la
            tecnología. Cada línea de código es un paso más hacia ese sueño, y
            estoy emocionado por lo que el futuro tiene reservado.
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
