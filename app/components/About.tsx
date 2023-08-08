// import React from 'react'
import '../styles/about.css'
import img from '../../public/image5.png'
import img1 from '../../public/pizza-icon.png'
import img2 from '../../public/soda-icon.png'
import img3 from '../../public/creator3.jpg'



const About = () => {
  
  return (
    <div>
        <div className='about section__padding' id='about'>
        <div className='about-image' data-aos="fade-left" data-aos-duration="500">
          <img src={img} alt="/"/>
        </div>

        <div className='about-content'  data-aos="fade-right" data-aos-easing="ease-in-out">
            <h4 style={{color:'#C41E3A'}}>About Us</h4>
          <h1 >
          Where Quality Food Meet Excellent Service
          </h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae </p>
          <div className='aboutMini'>
            <div className='aboutMiniBox'>
              <img src={img1} alt='/'/>
              <div>
                <h3>Fast Foods</h3>
                <p>Health foods are nutrient dense foods</p>
              </div>
            </div>
            <div className='aboutMiniBox'>
            <img src={img2} alt='/'/>
              <div>
                <h3>Healthy Foods</h3>
                <p>Health foods are nutrient dense foods</p>
              </div>
            </div>
          </div>
          <div className="btn-container-new">
            <div className='about-info'>
              <img src={img3} alt="/" />
              <div style={{marginLeft:'0.5rem'}}>
                <h4>Ogomide Samuel <br /> <span style={{fontWeight:'normal'}}> Lead Engineer</span></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About