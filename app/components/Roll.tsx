import React from 'react'
import '../styles/roll.css'
import { cocktails, wines } from '~/data/minidb'
import MenuItem from '~/constant/MenuItem'
import img from '../../public/image2.png'
import { Link} from "@remix-run/react";

const Roll = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className='app__specialMenu-Top'>
        <h1>Top Menu Today</h1>
        <p>CHEF SPECIAL</p>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Breakfast</p>
        <div className="app__specialMenu_menu_items">
          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={img} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Dinner</p>
        <div className="app__specialMenu_menu_items">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
    <Link to="/">
            <div className="btn-container">
              <button className='primary-button'>Explore Menu </button>
            </div>
          </Link>
    </div>
  </div>
  )
}

export default Roll