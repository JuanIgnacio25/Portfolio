import { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // cerrar el menú al hacer click
    }
  };

  return (
    <div className="custom-navbar">
      <div className="custom-navbar-wrapper">
        <a className="custom-navbar-logo" href="#">
          <img src="/logo.svg" alt="Logo" width="50" />
        </a>

        <button
          className="custom-navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HiOutlineViewList size={28} color="white" />
        </button>

        <nav className={`custom-navbar-menu ${isOpen ? "show" : ""}`}>
          <a onClick={(e) => handleSelectSection(e, "#sobre-mi")}>Sobre mí</a>
          <a onClick={(e) => handleSelectSection(e, "#proyectos")}>Proyectos</a>
          <a onClick={(e) => handleSelectSection(e, "#tecnologias")}>Tecnologías</a>
          <a onClick={(e) => handleSelectSection(e, "#contacto")}>Contacto</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;