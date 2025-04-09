
const NavBar = () => {

  const handleSelectSection = (e,id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container-fluid nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">
            <img
              src="/logo.svg"
              width="50px"
              alt="Logo del porfolio"
            />
          </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi" aria-current="page" onClick={(e) => handleSelectSection(e, "#sobre-mi")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos" onClick={(e) => handleSelectSection(e, "#proyectos")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias" onClick={(e) => handleSelectSection(e, "#tecnologias")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={(e) => handleSelectSection(e, "#contacto")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
