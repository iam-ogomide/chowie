import React from 'react'
import img1 from '../../public/smoothie8.png'
import img2 from '../../public/image11.png'
import '../styles/sub.css';

const Subscribe = () => {
  return (
    <div className='sub-container section__margin'>
        <div className='leftImg'>
            <img src={img1} alt="/" />
        </div>
        <div className="sub-content">
            <h2>Subscribe to our newsletter <br /> to get updates</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, magnam.</p>
        </div>
        <div className='rightImg'>
            <img src={img2} alt="/" />
        </div>
    </div>
  )
}

export default Subscribe