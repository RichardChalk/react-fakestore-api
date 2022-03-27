import React, { useEffect, useState } from "react";
import { CheckoutProduct } from "./CheckoutProduct";
import { fetchProducts } from "./Data/ProductData";

export const Checkout = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <section className="checkout-products container" id="checkout-products">
      <h1 className="checkout-heading">checkout</h1>

      <div className="checkout-productgallery">
        {props.shoppingCart.map((p) => (
          <CheckoutProduct
            key={p.item.id}
            product={p.item}
            quantity={p.quantity}
            cartTotal={props.cartTotal}
            setCartTotal={props.setCartTotal}
            onChangeChosenProduct={props.onChangeChosenProduct}
            onChangeActivePage={props.onChangeActivePage}
            addToCart={props.addToCart}
            addItemToCart={props.addItemToCart}
            shoppingCart={props.shoppingCart}
          />
        ))}
      </div>
    </section>
  );
};
