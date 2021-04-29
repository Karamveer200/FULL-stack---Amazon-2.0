import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotalcomp">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <strong>Subtotal</strong> ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This product contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button className="checkout_btn">Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
