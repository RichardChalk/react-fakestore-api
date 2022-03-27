import React from "react";
import { Home } from "./Home";
import { Products } from "./Products";
import { ProductInfo } from "./ProductInfo";
import { Checkout } from "./Checkout";

export const Main = (props) => {
  return (
    <main>
      {props.activePage === "Home" ? (
        <Home onChangeActivePage={props.onChangeActivePage} />
      ) : (
        ""
      )}
      {props.activePage === "Products" ? (
        <Products
          onChangeActivePage={props.onChangeActivePage}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
          onChangeChosenProduct={props.onChangeChosenProduct}
          addToCart={props.addToCart}
          addItemToCart={props.addItemToCart}
          shoppingCart={props.shoppingCart}
        />
      ) : (
        ""
      )}
      {props.activePage === "ProductInfo" ? (
        <ProductInfo
          onChangeActivePage={props.onChangeActivePage}
          onChangeChosenProduct={props.onChangeChosenProduct}
          chosenProduct={props.chosenProduct}
          addToCart={props.addToCart}
          addItemToCart={props.addItemToCart}
          shoppingCart={props.shoppingCart}
        />
      ) : (
        ""
      )}
      {props.activePage === "Checkout" ? (
        <Checkout
          onChangeActivePage={props.onChangeActivePage}
          onChangeChosenProduct={props.onChangeChosenProduct}
          shoppingCart={props.shoppingCart}
          addToCart={props.addToCart}
          addItemToCart={props.addItemToCart}
          removeFromCart={props.removeFromCart}
          removeItemFromCart={props.removeItemFromCart}
        />
      ) : (
        ""
      )}
    </main>
  );
};
