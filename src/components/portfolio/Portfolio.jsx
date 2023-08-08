import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/visualisasi_2.jpg'
import IMG2 from '../../assets/visualisasi_2.jpg'
import IMG3 from '../../assets/visualisasi_2.jpg'
import IMG4 from '../../assets/visualisasi_2.jpg'
import IMG5 from '../../assets/visualisasi_2.jpg'
const Portfolio = () => {
  return (
<section id='portofolio' >
  <h5>My Recent work</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio__container">
    <article className="portfolio__items">
      <div className="portfolio__item-image">
        <img src={IMG1} alt='' />
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://www.tableau.com/products/server" className='btn btn-primary' target='_blank'>Live demo</a>
      </div>
    </article>
    <article className="portfolio__items">
      <div className="portfolio__item-image">
        <img src={IMG2} alt='' />
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://www.tableau.com/products/server" className='btn btn-primary' target='_blank'>Live demo</a>
      </div>
       </article>
    <article className="portfolio__items">
      <div className="portfolio__item-image">
        <img src={IMG3} alt='' />
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://www.tableau.com/products/server" className='btn btn-primary' target='_blank'>Live demo</a>
      </div>
    </article>
    <article className="portfolio__items">
      <div className="portfolio__item-image">
        <img src={IMG4} alt='' />
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://www.tableau.com/products/server" className='btn btn-primary' target='_blank'>Live demo</a>
      </div>
   </article>
    <article className="portfolio__items">
      <div className="portfolio__item-image">
        <img src={IMG5} alt='' />
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portfolio__item-cta">
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://www.tableau.com/products/server" className='btn btn-primary' target='_blank'>Live demo</a>
      </div>
   </article>
  </div>
</section>
  )
}

export default Portfolio