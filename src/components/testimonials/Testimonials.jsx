import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ulf Karlsson',
    review: 'Fick exakt vad som utlovades! Och vad snabbt det gick? Alla ändringar jag behövde skedde effektivt och utan krångel. Rekommenderar!',
  },
  {
    avatar: AVTR2,
    name: 'Lars Eriksson',
    review: 'Levererade enligt utsago och har inga som helst invändningar alls.',
  },
  {
    avatar: AVTR3,
    name: 'Mona',
    review: 'Han övertalade mig om en annan design och fastän jag i början inte höll med blev jag glatt överraskad!',
  },
  {
    avatar: AVTR4,
    name: 'Arianna',
    review: 'He hooked me up! 5/5',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
