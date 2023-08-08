import React from "react";
import img from '../../public/can.png'
import { Link } from "@remix-run/react";

const PaymentCancelled = () => {
  return (
    <>
      <div className="section__padding">
      <div className="Add-to-bag">
            <img src={img} alt="/" />
          <h1 className="">
            Payment Failed , You will not be charged 
          </h1>
          <Link to='/'>
          <button
            className="primary-button"
          >
           Back to Homepage
          </button>
          </Link>
          
        </div>
      </div>
    </>
  )
};

export default PaymentCancelled;