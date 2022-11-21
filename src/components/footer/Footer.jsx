import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Marcus</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Marcus Rothoff visuals, all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
