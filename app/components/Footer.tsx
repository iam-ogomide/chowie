import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer section__padding'>

      <div className='footer-links'>
        <div className='footer-links_logo'>
          <h2>CHOWIE</h2>
          <p>Aguda, Surlere , Lagos state</p>
        </div>

        <div className='footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='footer-links_div'>
          <h4>Get in touch</h4>
          <p>Aguda, Surlere , Lagos state</p>
          <p>085-132567</p>
          <p>chowie@payus.io</p>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>© 2023 Mide Light work. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer