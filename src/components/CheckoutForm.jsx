import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../assets/CreditCard.svg";
import '../index.css'
import { ChangeCredits } from "../functions/auth";
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51Ns9d1IrxCZ9xORcY6MJzoRuqgGZl2pAFxK43SupP18gL55vEV15KmN3HZnfanDy99zqxJZcdNOGEqp7hTxfJyBB00KJ9kFDZR");
  }

  return stripePromise;
};

const CheckoutForm = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: import.meta.env.VITE_ONE_CREDIT_STRIPE_PRICE_ID,
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { paymentIntent, error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error){
      setStripeError(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      ChangeCredits(1);
    }
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy Credit"}</p>
        </div>
      </button>
    </div>
  );
};

export default CheckoutForm;
