import React from "react";

let Navbar = function(){
    return <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid col-lg-7">
      <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      {/* tengo que hacer uso del atributo style ya que con bootstrap, navbar-toggler tiene por defecto fondo trasparente y el navegador lo interpreta por encima de los bg de bootstrap */}
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#f8f9fa" }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;