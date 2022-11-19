import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {GiBookCover} from 'react-icons/gi'
import {MdRoomService} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonBoundingBox /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookCover /></a>
      <a href="#services" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdRoomService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav
