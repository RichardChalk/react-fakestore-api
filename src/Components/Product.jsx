import React from "react";

export const Product = (props) => {
  return (
    <div className="productgallery_card">
      <div className="productgallery_card_container">
        <img src={props.product.image} alt="cookies" className="hero-image" />
        <div className="information">
          <div className="name">{props.product.title}</div>
          <div className="category-name">{props.product.category}</div>

          <a
            className="btn btn-buy"
            onClick={() => {
              props.addToCart();
              props.addItemToCart({
                item: props.product,
                quantity: 1,
              });
            }}
          >
            Buy&nbsp;
          </a>
          <a
            className="btn btn-info"
            onClick={() => {
              props.onChangeActivePage("ProductInfo");
              props.onChangeChosenProduct(props.product);
            }}
          >
            Info
          </a>
        </div>
      </div>
    </div>
  );
};
