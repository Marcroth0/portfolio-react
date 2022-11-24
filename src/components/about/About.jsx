import React from 'react'
import './about.css'
import ME from '../../assets/memoji.png'
import {FaAward} from 'react-icons/fa'
import {IoMdSchool} from 'react-icons/io'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Full Stack Developer</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            With a history in the creative field of not only photography, but copywriting as well, I'm fully equipped fulfilling the needs of a modern company in need of a modern website. 
          </p>
          <a href="#contact" className='btn btn-primary'>Talk?</a>
        </div>
      </div>
    </section>
  )
}

export default About
