import React from "react";

export const CheckoutProduct = (props) => {
  return (
    <div className="checkout-productgallery_card">
      <div className="checkout-productgallery_card_container">
        <img
          src={props.product.image}
          alt="cookies"
          className="checkout-hero-image"
          onClick={() => {
            props.onChangeActivePage("ProductInfo");
            props.onChangeChosenProduct(props.product);
          }}
        />

        {/* ------------------------------ */}
        <div className="checkout-information">
          <div
            className="checkout-name"
            onClick={() => {
              props.onChangeActivePage("ProductInfo");
              props.onChangeChosenProduct(props.product);
            }}
          >
            {props.product.title}
          </div>
        </div>

        {/* ------------------------------ */}
        <div className="btn-wrapper">
          <a
            className="btn checkout-btn-buy"
            onClick={() => {
              props.addToCart();
              props.addItemToCart({
                item: props.product,
                quantity: 1,
              });
            }}
          >
            +
          </a>
          <span className="checkout-total-bought">{props.quantity}</span>
          <a
            className="btn checkout-btn-remove"
            onClick={() => {
              props.removeFromCart();
              props.removeItemFromCart({
                item: props.product,
                quantity: 1,
              });
            }}
          >
            -
          </a>
        </div>
      </div>
    </div>
  );
};
