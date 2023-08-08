import React from 'react'
import { Link } from "@remix-run/react";
import styles from "~/styles/navbar.css";
import { MdOutlineMoneyOff } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiShoppingBag } from 'react-icons/bi'
import { useCartState } from '~/lib/useCart';

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const totalItems = useCartState((state) => state.totalItems);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
            <h1>CHOWIE</h1>
        </Link>
      </div>
      <div>
      <ul className="app__navbar-links">
        <li className=""><a href="/">Home</a></li>
        <li className=""><a href="/MenuList">Menu</a></li>
        <li className=""><a href="/Contact">Contact</a></li>
        {/* <div className='btn'>
          <button>Sign in</button>
        </div> */}
      </ul>
      
      </div>
      <div>
        <Link to='/Cart'>
        <button className='cartbuttonbox'>
            <BiShoppingBag style={{color:'black',fontSize:'24px'}}/>
            <span className='cartno' style={{color:'#fff'}}>{totalItems}</span>
        </button>
        </Link>
      </div>
     
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />

        {/* Checking if the toggleMenu is true */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineMoneyOff fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/MenuList" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/Contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar