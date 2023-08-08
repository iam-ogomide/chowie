import React from 'react'
import { chefImg } from '~/data/minidb'
import '../styles/chef.css'

interface Props {
    id: number;
    name: string;
    exp: string;
    img: string;
    
}

const Chef = () => {
  return (
    <div className='chef-wrapper section__padding'>
        <div className='chefTop'>
            <h2>Our Special Chefs</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Id ratione numquam quisquam ptatem odio.</p>
        </div>

        <div className="chef-grid-container">
            {chefImg.map(({id, name, exp, img}:Props) => (
            <div key={id} className="chef-grid">
                <div className='top'>
                    <img src={img} alt="/" />
                </div>
                <div className='product-name'>
                    <h3>{name}</h3>
                    <p>{exp}</p>
                </div>
                  
            </div>
            ))}
        </div>
    </div>
  )
}

export default Chef