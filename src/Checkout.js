import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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
          <h1>
            <strong>Your shopping cart -</strong>
          </h1>
        </div>
        <div className="checkout_items_list">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
