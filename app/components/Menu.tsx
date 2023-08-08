import React from 'react'
import '../styles/menu.css'
import { minidb } from '../../app/data/minidb'
import { Link} from "@remix-run/react";
// import MenuList from '~/routes/MenuList';
interface Props {
    id: number;
    name: string;
    desc: string;
    price: string;
    img: string;
    
}
const Menu = () => {
  return (
    <div className='menu-container section__padding'>
        <div className='menuTop'>
            <h4>OUR SPECIAL DISHES</h4>
            <h2>Dishes That Always <br /> Make You Fall In Love</h2>
        </div>
        <div className="product-grid-container">
            {minidb.map(({id, name, desc, price, img}:Props) => (
            <div key={id} className="product-grid">
                <div className=''>
                    <img src={img} alt="/" />
                </div>
                <div className='product-name'>
                    <h3>{name}</h3>
                </div>
                <div className='product-name'>
                    <p>{desc}</p>
                    <h3 className='menuPrice'>${price}</h3> 
                </div>    
            </div>
            ))}
        </div>
        <Link to="/MenuList">
        <div className="explore-btn" style={{marginTop: 60}}>
          <a href="#" className='exp'>Explore More</a>
        </div>
        </Link>
    </div>
  )
}

export default Menu