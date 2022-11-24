import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Fully fledged UI/UX design with figma layouts</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>User- and admin oriented websites</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Unique ideas which attract attention</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Weird idea? Please tell me more...</p>
            </li>
          </ul>
        </article>
                  {/* end of ui/ux */}
         <article className='service'>
          <div className='service__head'>
            <h3>The Story</h3>
          </div>
          <ul className='service__list'>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Every website has a story - let me write it</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>A company has a beginning, a middle, and a future - let your visitors feel it!</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>As a novel, words need to hit, and as an internet website your words need SEO-value</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>An "about" page isn't about you, please, it's about the why.</p>
            </li>
             <li><AiOutlineCheck className='service__list-icon'/>
            <p>The story - read it, believe it, wouldn't you want to visit it? <br></br><a href="https://marcroth0.github.io/p1-secret-bar/" target="_blank" rel="noreferrer">Secret bar</a></p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Specalized in small- and medium company websites</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Website controlled by you.</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Authentication, administrator-view, write your own articles, publish your own products, have your own website.</p>
            </li>
            <li><AiOutlineCheck className='service__list-icon'/>
            <p>Ecommerce - a fully formed website to take payments.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
