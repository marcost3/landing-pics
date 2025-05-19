import React from 'react'
import './Hero.css'

const Hero = () => (
  <section id="inicio" className="hero-section d-flex align-items-center justify-content-center text-center">
    <div>
      <h1 className="display-3 fw-bold text-white">Marco López</h1>
      <img src="/perfil.jpg" alt="Foto del fotógrafo" className="rounded-circle my-4" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
      <h4 className="text-light fst-italic">Fotógrafo de estilo industrial y urbano</h4>
    </div>
  </section>
)

export default Hero
