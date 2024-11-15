import React from "react";

const collapsedButtonStyles = {
  backgroundColor: "#f8f9fa"
}


let Navbar = function(){
    return <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid col-lg-7">
      <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={collapsedButtonStyles}>
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