import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import '../styles/serve.css'
import img from '../../public/un1.png'
import img1 from '../../public/un2.png'
import img2 from '../../public/un3.png'

const Serve = () => {
  return (
    <div className='how-container section__padding' id='how'>
        <h4>WHAT WE SERVE</h4>
        <h2>Your Favourite Food Delivery Partner</h2>

        <div className="bottom-container">
            <div className="box white">
                <div className="box-1">
                    {/* <FaLocationDot /> */}
                    <img src={img1} alt="" style={{width:'250px',height:"150px",marginBottom:'1rem'}}/>
                </div>
                <h3>Easy to Order</h3>
                <p>Choose your location and find your best car</p>
            </div>
            <div className="box blue">
                <div className="box-2">
                    {/* <FaLocationDot /> */}
                    <img src={img2} alt="" style={{width:'150px',height:"150px",marginBottom:'1rem'}}/>
                </div>
                <h3>Fastest Delivery</h3>
                <p>Select a Pickup date and time to bok a ride</p>
            </div>
            <div className="box white">
                <div className="box-1">
                    {/* <FaLocationDot /> */}
                    <img src={img} alt="" style={{width:'150px',height:"150px",marginBottom:'1rem'}}/>
                </div>
                <h3>Best Quantity</h3>
                <p>Book your ride and your driver will reach you within 10 minutes</p>
            </div>
        </div>
        
    </div>
  )
}

export default Serve