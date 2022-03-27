import React, { useState, useEffect } from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [activePage, setActivePage] = useState("Home");
  const [cartTotal, setCartTotal] = useState(0);
  const [chosenProduct, setChosenProduct] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);

  const onChangeActivePage = (newPage) => {
    setActivePage(newPage);
  };

  const onChangeChosenProduct = (product) => {
    setChosenProduct(product);
  };

  const addToCart = () => {
    setCartTotal((prevCartTotal) => {
      return (prevCartTotal = cartTotal + 1);
    });
  };

  const addItemToCart = (product) => {
    const alreadyExistsInCart = shoppingCart.findIndex(
      (prod) => prod.item.id === product.item.id
    );
    if (alreadyExistsInCart === -1) {
      setShoppingCart([...shoppingCart, product]);
    } else {
      const copyShoppingCart = [...shoppingCart];
      copyShoppingCart[alreadyExistsInCart].quantity =
        copyShoppingCart[alreadyExistsInCart].quantity + 1;

      setShoppingCart(copyShoppingCart);
    }
  };

  // Used only for showing and checking content in the array
  // useEffect(() => {
  //   console.log(shoppingCart);
  // }, [shoppingCart]);

  return (
    <div className="myApp" data-theme={theme}>
      <Header
        activePage={activePage}
        onChangeActivePage={onChangeActivePage}
        cartTotal={cartTotal}
        switchTheme={switchTheme}
      />
      <Main
        activePage={activePage}
        onChangeActivePage={onChangeActivePage}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        onChangeChosenProduct={onChangeChosenProduct}
        chosenProduct={chosenProduct}
        addToCart={addToCart}
        addItemToCart={addItemToCart}
        shoppingCart={shoppingCart}
      />
      <Footer />
    </div>
  );
}

export default App;
