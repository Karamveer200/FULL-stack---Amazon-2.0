import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <strong>
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </strong>
      <p className="order_id">
        <small>
          <strong>ORDER ID - </strong>
          {order.id}
        </small>
      </p>
      {order.data.basket?.map((item, index) => (
        <div className="order_set">
          <CheckoutProduct
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        </div>
      ))}
      <div className="order_total">
        {" "}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>Order Total: {value}</h3>
            </>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
