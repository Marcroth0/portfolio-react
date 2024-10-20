import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'
import MEM2 from '../../assets/memoji2.png'
import MEM3 from '../../assets/memoji3.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>
      <div className='experience__memoji'>
        {/* <img src={MEM2} alt="" /> */}
        <img src={MEM3} alt="" />
      </div>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>Cypress/Jest</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>Typescript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>AWS</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsShieldFillCheck className="experience__details-icon" />
            <div>
              <h4>AWS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
