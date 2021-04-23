import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [state, dispatch] = useStateValue();
  var totalPrice = 0;

  state.basket.map((item) => (totalPrice = totalPrice + item.price));

  return (
    <div className="subtotalcomp">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length} items):
              <strong>{totalPrice}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This product contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSepratpr={true}
        prefix={"$"}
      />
      <button className="checkout_btn">Checkout</button>
    </div>
  );
}

export default Subtotal;
