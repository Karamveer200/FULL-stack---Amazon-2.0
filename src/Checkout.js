import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="flex_items">
        <img
          className="checkout_ad hide-sm"
          alt=""
          src="https://marketplace.canva.com/EADan5rkVhc/2/0/1600w/canva-short-haircut-photo-banner-email-header-EVNXplwrork.jpg"
        />
        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
      <div className="bottomcontent">
        <hr />
        <div className="checkout_title">
          <h1>Your shopping cart -</h1>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
