import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { AlertsConsumer } from "react-context-alerts";
import $ from "jquery";

const CheckoutProduct = forwardRef(
  ({ id, title, price, rating, img, hideButton }, ref) => {
    const [, dispatch] = useStateValue();

    const removeFromBasket = (alerts) => {
      var makeID = "#" + id;

      $(makeID).prop("id", "container");
      $("#container").css("opacity", 0);
      $("#container").css("transition", "all 0.5s ease");
      $("#container").css("transform", "translateX(1500px)");
      setTimeout(function () {
        $("#container").css("opacity", 1);
        $("#container").css("transition", "none");
        $("#container").css("transform", "none");
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      }, 700);
      alerts.error("Product Removed- ", "Removed - " + title);
    };

    return (
      <AlertsConsumer ref={ref}>
        {(alerts) => (
          <div className="checkout_product" id={id}>
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
              {!hideButton && (
                <button
                  className="remove_btn"
                  onClick={() => removeFromBasket(alerts)}
                  id="submit"
                >
                  Remove Item
                </button>
              )}
            </div>
          </div>
        )}
      </AlertsConsumer>
    );
  }
);

export default CheckoutProduct;
