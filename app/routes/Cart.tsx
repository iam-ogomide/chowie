import React from "react";
import { Form, Link } from "@remix-run/react";
import { urlFor } from "~/lib/sanityImageUrl";
import { useCartState } from '~/lib/useCart';
import '../styles/cart.css';
import img from '../../public/carte.png'
import {AiFillDelete} from 'react-icons/ai'


const Cart = () => {
    const data = useCartState((state) => state.cart);

  //If the cart state is true or false
  const cartState = useCartState((state) => state.showCart);

  //Action to toggle the showcart
  const toggleShowCart = useCartState((state) => state.toggleShowCart);

  //Remove items from cart
  const removeItem = useCartState((state) => state.removeFromCart);

  //Total price of items
  const total = useCartState((state) => state.totalPrice);
  return (
    <div className="cart-wrapper section__padding">
    <div className="cart-wrapper-top">
      <div className="cart-heading">
        <h1>
          My Order
        </h1>
      </div>

      {/* If there are no data in the shopping modal show the add item text else show the items addede to cart */}
      {data.length < 1 ? (
        <div className="Add-to-bag">
            <img src={img} alt="/" />
          <h1 className="">
            Go back and order food Idan!!!!
          </h1>
          <Link to='/MenuList'>
          <button
            onClick={toggleShowCart}
            className="primary-button"
          >
            Explore Menu
          </button>
          </Link>
          
        </div>
      ) : (
        <div className="MainShow">
          <div>
            <ul className="MainShow-ul">
              {data.map((product, idx) => (
                <li key={idx} className="MainShow-li">
                  <div className="li-top">
                    <img
                      src={urlFor(product.image[0]).url()}
                      alt="Product img"
                      className=""
                    />
                  </div>
                  <div className="MainShow-wrapper">
                    <div>
                      <div className="MainShow-wrapper-top">
                        <h3>
                          <Link
                            to={`/product/${product.slug.current}`}
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="" style={{fontWeight:'bold'}}>
                          $ {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="MainShow-wrapper-bottom">
                      <p className="">
                        Quantity: {product.quantity}
                      </p>
                      <div className="" style={{display: 'flex'}}>
                        <button
                          type="button"
                          className="MainShow-wrapper-bottom-btn"
                          onClick={() => removeItem(product)}
                        >
                          <AiFillDelete size={25}/>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

    {/* If statement for the subtotal price */}
    <hr />
    {data.length < 1 ? null : (
      <div className="BottomWrapper">
        <div className="BottomWrapper-sub">
          <p>Subtotal</p>
          <p>$ {total}</p>
        </div>
        <p className="BottomWrapper-ship">
          Shipping and tax will be calcualted at checkout
        </p>

        <div className="" style={{marginTop: '1.5rem'}}>
          <Form method="POST" action="/buy">
            <input
              type="hidden"
              name="cartData"
              value={JSON.stringify(data)}
            />

            <button
              type="submit"
              className="primary-button"
            >
              Checkout
            </button>
          </Form>
        </div>
      </div>
    )}
  </div>
  )
}

export default Cart