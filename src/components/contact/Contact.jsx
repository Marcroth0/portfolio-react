import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import MEMG from '../../assets/memojigif.gif'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u058fvo', 'template_l69hv6r', form.current, 'jczRTBykows7XYT9O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className='contact__memoji'>
        <img src={MEMG} alt="" />
      </div>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>myemail@gmail.com</h5>
            <a href="mailto:myemail@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Marcus Rothoff</h5>
            <a href="https://www.linkedin.com/in/marcus-rothoff-59a079232/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Text</h4>
            <h5>+46728552271</h5>
            <a href="sms://+46728552271" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
