import React from 'react'

const Contact = () => (
  <section id="contacto" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="text-center mb-4">Contacto</h2>
      <form className="w-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="tucorreo@mail.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="5" placeholder="Escribí tu mensaje..."></textarea>
        </div>
        <button type="submit" className="btn btn-light">Enviar</button>
      </form>
    </div>
  </section>
)

export default Contact
