import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hello I'm</h5>
        <h1>Marcus Rothoff</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      <CTA />
    </header>
  )
}

export default Header
