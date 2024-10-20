import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce website with Stripe API (Under construction)",
    github: "https://github.com/Marcroth0/canned-water",
    demo: "https://canned-water.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Relationship quarrel - an argument solver online(Undergoing a rebuild)",
    github: "https://github.com/Marcroth0/relationship-quarrel",
    demo: "https://quarrel2022.herokuapp.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "A secret bar by fabrizio von va Bene",
    github: "https://github.com/Marcroth0/p1-secret-bar",
    demo: "https://marcroth0.github.io/p1-secret-bar/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Memory game in Javascript",
    github: "https://github.com/Marcroth0/memory-game",
    demo: "https://marcroth0.github.io/memory-game/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Hangman game in Python (discontinued)",
    github: "https://github.com/Marcroth0/python-game",
    demo: "https://thawing-hamlet-48348.herokuapp.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Countdown timer in Typescript and angular",
    github: "https://github.com/Marcroth0/angular-ts-countdown",
    demo: "https://ang-ts-countdown.netlify.app",
  },
  
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live website</a>
              </div>
            </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio
