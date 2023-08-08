import React from 'react'
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className='contact-section section__padding' >
      <h1 className='gradient__text'>Contact Us</h1>
      <form action="" className='contact-form'>
        <input type="text" className="contact-form-text" placeholder='Name' />
        <input type="text" className="contact-form-text" placeholder='Email' />
        <input type="text" className="contact-form-text" placeholder='Discod ID' />
        <textarea className="contact-form-text" placeholder='Leave us a message'></textarea>
        <input type="submit" className='primary-button' value='send' />

      </form>
    </div>
  )
}

export default Contact