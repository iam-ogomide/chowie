import React from 'react'
import {BsArrowRight} from 'react-icons/bs';
import img2 from '../../public/image4.png'
import "../styles/header.css";
import { Link} from "@remix-run/react";



const Header = () => {
  return (
    <div className='header section__padding' id='home'>
        <div className='header-content' >
          <h1>
           Be The Fastest In Delivering Your <span style={{color:'#C41E3A'}}>Food</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          <Link to="/">
            <div className="btn-container">
              <button className='primary-button'>Get Started <BsArrowRight /></button>
            </div>
          </Link>
          
        </div>

        <div className='header-image'>
          <img src={img2} alt="/" />
        </div>
      </div>
  )
}

export default Header