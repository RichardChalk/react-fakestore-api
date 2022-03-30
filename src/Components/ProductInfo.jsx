import React from "react";

export const ProductInfo = (props) => {
  return (
    <section className="section-product-info">
      <h1 className="products-heading">product information</h1>

      <div className="productinfo_card_container">
        <img
          src={props.chosenProduct.image}
          alt="product image"
          className="productinfo-image"
        />
        <div className="information-wrapper">
          <div className="productinfo-information">
            <div className="productinfo-name">{props.chosenProduct.title}</div>

            <div className="checkout-category-name">
              {props.chosenProduct.category.toUpperCase()}
            </div>

            <a
              className="btn btn-buy"
              onClick={() => {
                props.addToCart();
                props.addItemToCart({
                  item: props.chosenProduct,
                  quantity: 1,
                });
              }}
            >
              Buy&nbsp;
            </a>
            <a
              className="btn btn-info"
              onClick={() => props.onChangeActivePage("Products")}
            >
              Back
            </a>
          </div>
          <div className="extra-information">
            <div className="productinfo-description">
              {props.chosenProduct.description}
            </div>
            <p className="productinfo-price">
              {props.chosenProduct.price.toFixed(0)}kr
            </p>
            <span>
              {props.chosenProduct.rating.rate >= 1 ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                ""
              )}
              {props.chosenProduct.rating.rate >= 2 ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                ""
              )}
              {props.chosenProduct.rating.rate >= 3 ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                ""
              )}
              {props.chosenProduct.rating.rate >= 4 ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                ""
              )}
              {props.chosenProduct.rating.rate === 5 ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                ""
              )}
              {props.chosenProduct.rating.rate % 1 >= 0.5 ? (
                <i className="bi bi-star-half"></i>
              ) : (
                ""
              )}
              <br></br>
              <span className="productinfo-rating">
                {props.chosenProduct.rating.rate}
              </span>
              /5
            </span>
            <span>
              &nbsp;(<i className="bi bi-people-fill"></i>
              &nbsp;{props.chosenProduct.rating.count})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
