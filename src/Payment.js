import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./Firebase";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    topFunction();
  }, []);

  useEffect(() => {
    //Generate stripe secret that allows us to charge customer

    //That's how we run async fn inside useEffect
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        //Stripe expects the payment in subunit, like if we use$, we have to pass amount in cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("SECRETTTT _ ", clientSecret);

  const handleSubmit = async (e) => {
    //Stripe Functionality
    e.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid) //This is not id but 'uid'
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        //paymentIntent is like a confirmation from stripe
        setSucceeded(true);
        setProcessing(false);
        setError(null);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //Listen changes in card elements and display error

    setDisabled(e.empty); //If e is emptyt, then set Disable to true
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          <Link to="/checkout">
            <i className="fas fa-arrow-circle-left"></i> Checkout (
            {basket?.length}) items in cart
          </Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p className="payment_address_p">{user?.email}</p>
            <p className="payment_address_p">8888 Royal Drive</p>
            <p className="payment_address_p">Burnaby, BC, V5A 1S6</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/*Stripe MAgic*/}
            <form onSubmit={handleSubmit}>
              <CardElement className="cardelement" onChange={handleChange} />
              <div className="payment_price_container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
