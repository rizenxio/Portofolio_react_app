import React , { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2o13rf9', 'template_z09nyqw', form.current, 'n-o1z2w45I2ezSDTc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get Interact With me</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>bahrur1256@gmail.com</h5>
          <a href="mailto:bahrur1256@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <AiOutlineFacebook className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>bahrur Rizky</h5>
          <a href="https://m.me/bahrurriski1" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatApp</h4>
          <h5>bahrur1256@gmail.com</h5>
          <a href="https://api.whatsapp.com/send?phone=082136514695" target='_blank'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='your full name' required />
        <input type="email" name="email" placeholder='Your email' required />
        <textarea name="message" rows="7" placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact