import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bahrur Rizky</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='' />
        </div>

        <div className='line_arrow'></div>
        <a href="#contact" className='scroll__down'>Scrooll down</a>

      </div>
    </header>
  )
}

export default Header