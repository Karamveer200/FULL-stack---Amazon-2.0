import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, img }) {
  const [state, dispatch] = useStateValue();

  console.log("basket - " + state.basket);

  const addToBasket = () => {
    //Dispatch the action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: img,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="huge">{title}</p>
        <p className="product_price">
          <strong>{price}</strong>
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
    </div>
  );
}

export default Product;
