import React from 'react'
import './Works.css'

const works = [
  {
    title: 'Revista Metal',
    img: 'https://images.pexels.com/photos/29205058/pexels-photo-29205058/free-photo-of-primer-plano-de-una-guitarra-electrica-con-pua.jpeg'
  },
  {
    title: 'Campaña Levi’s 2023',
    img: 'https://images.pexels.com/photos/14528152/pexels-photo-14528152.jpeg'
  },
  {
    title: 'Festival de Fotografía Urbana',
    img: 'https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg'
  }
]

const Works = () => (
  <section id="trabajos" className="py-5">
    <div className="container">
      <h2 className="text-center text-white mb-5">Trabajos Destacados</h2>
      <div className="row">
        {works.map((work, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="work-card">
              <img src={work.img} alt={work.title} className="work-img" />
              <div className="work-body text-center">
                <h5>{work.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Works
