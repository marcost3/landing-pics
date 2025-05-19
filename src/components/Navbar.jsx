import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#121212" }}>
    <div className="container">
      <a className="navbar-brand" href="#">Fotógrafo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#sobre">Sobre mí</a></li>
          <li className="nav-item"><a className="nav-link" href="#trabajos">Trabajos</a></li>
          <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
