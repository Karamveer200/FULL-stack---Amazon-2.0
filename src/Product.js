import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Alert } from "react-context-alerts";

function Product({ id, title, price, rating, img }) {
  const [, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  const addToBasket = () => {
    //Dispatch the action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        rating: rating,
        price: price,
      },
    });
    setOpen(true);
    setTimeout(function () {
      setOpen(false);
    }, 3000);
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="huge">{title}</p>
        <p className="product_price">
          <strong>${price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img src={img} alt=""></img>
      <button onClick={addToBasket}>Add to Cart</button>
      <Alert open={open} message={"Added - " + title} />
    </div>
  );
}

export default Product;
