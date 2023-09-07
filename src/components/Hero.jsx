import React from "react";
import FotoPerfil from '../assets/fotoPerfil.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="img-container">
        <img
          src={FotoPerfil}
          alt="Mi foto de perfil"
          className="img-juan"
        />
      </div>
      <h1>Hola, soy Juan Ignacio Colli</h1>
      <h2>
        Soy un desarrollador full stack junior, especializado en el MERN stack
      </h2>
    </section>
  );
};

export default Hero;
