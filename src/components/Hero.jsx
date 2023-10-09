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
      <h1>Juan Ignacio Colli</h1>
      <h3>
        Desarrolador Web - MERN Stack
      </h3>
    </section>
  );
};

export default Hero;
