import { Link } from "@remix-run/react";
import React from "react";
import img from '../../public/done.png'

const PaymentSuccess = () => {
  return (
    <>
      <div className="section__padding">
      <div className="Add-to-bag">
            <img src={img} alt="/" />
          <h1 className="">
            Your Order was successfull My Gee
          </h1>
          <p>Your Meal will be delivered soon.</p>
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
  );
};

export default PaymentSuccess;