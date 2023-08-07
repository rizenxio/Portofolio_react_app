import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
<section id='experience'>
  <h5>What skill i have</h5>
  <h2>My experience</h2>

  <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Frontend Developer</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>CSS</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>Javascript</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>React</h4>
          <small className="text-light">Beginner</small>
          </div>
        </article>
      </div>
    </div>
    <div className="experience__backend">
      <h3>Backend Developer</h3>
    <div className="experience__content">
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>PHP</h4>
          <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>Python</h4>
          <small className="text-light">Experience</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>Mysql</h4>
          <small className="text-light">Experience</small>
          </div>
        </article>
        <article className='experience__details'>
          <AiOutlineCheckCircle className='experience__details-icon' />
          <div>
          <h4>Java</h4>
          <small className="text-light">Beginner</small>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default Experience