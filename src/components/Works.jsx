import React from 'react'

const works = [
  { title: 'Revista Metal', img: '/work1.jpg' },
  { title: 'Campaña Levi’s 2023', img: '/work2.jpg' },
  { title: 'Festival de Fotografía Urbana', img: '/work3.jpg' },
]

const Works = () => (
  <section id="trabajos" className="py-5">
    <div className="container">
      <h2 className="text-center mb-5">Trabajos Destacados</h2>
      <div className="row">
        {works.map((work, index) => (
          <div className="col-md-4 text-center" key={index}>
            <img src={work.img} alt={work.title} className="img-fluid rounded mb-3" />
            <h5>{work.title}</h5>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Works
