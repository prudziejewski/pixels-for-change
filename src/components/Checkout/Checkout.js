import React, { useState, useEffect } from "react";
import "./Checkout.scss";

const ProductDisplay = () => (
  <div className="wrapper">
    <section>
      <div className="checkout">
        <img
          className="checkout__img"
          src="https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Pixelized photo of the Mona Lisa"
        />
        <div className="checkout__description">
          <h3 className="checkout__text">
            A pixel that will help advertise your company while, providing back
            to casues that matter
          </h3>
          <h5 className="checkout__price">$1.00</h5>
        </div>
        {/* sends a Post request to the server which creates the stripe checkout session */}
        <form
          action="http://localhost:8020/create-checkout-session"
          method="POST"
        >
          <button className="checkout__button" type="submit">
            Checkout
          </button>
        </form>
      </div>
    </section>
  </div>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
