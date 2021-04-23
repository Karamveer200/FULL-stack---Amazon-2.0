import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, img }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //Dispatch the action
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout_product">
      <div className="fit_image">
        <img src={img} alt="" />
      </div>

      <div className="checkout_product_info">
        <p className="ch_title">
          <strong>{title}</strong>
        </p>
        <p className="ch_price">
          <strong>${price}</strong>
        </p>
        <div className="ch_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
        <button className="remove_btn" onClick={removeFromBasket}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
