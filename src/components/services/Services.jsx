import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
<section id='services'>
  <h5>What I offer</h5>
  <h2>Services</h2>
  <div className="container service__container">
    <article className="service">
      <div className="service__head">
    <h3>UI/UX Design</h3>
      </div>
  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
  </ul>
    </article>
    {/* end of ui/ux */}
    <article className="service">
      <div className="service__head">
    <h3>Backend Development</h3>
      </div>
  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
  </ul>
    </article>
    {/* end oF BACKEND */}
    <article className="service">
      <div className="service__head">
    <h3>Data Science</h3>
      </div>
  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet,leit </p>
    </li>
  </ul>
    </article>
    {/* end of DATA SCIENCE */}
  </div>
</section>
  )
}

export default Services