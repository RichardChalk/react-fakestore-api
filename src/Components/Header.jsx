import React from "react";
import { HeaderMenuItem } from "./HeaderMenuItem";

// Needs package
// npm i use-local-storage
export const Header = (props) => {
  return (
    <header className="siteheader">
      <div className="logo">
        <i className="bi bi-shop"></i>
        <span className="logopart1"> RICH</span> Products
        <i className="bi bi-brightness-high"></i>
        <i className="bi bi-toggle-on" onClick={props.switchTheme}></i>
        <i className="bi bi-moon"></i>
      </div>
      <nav>
        <ul className="navmenu">
          <HeaderMenuItem
            activePage={props.activePage}
            onChangeActivePage={props.onChangeActivePage}
            menuText="Home"
          />
          <HeaderMenuItem
            activePage={props.activePage}
            onChangeActivePage={props.onChangeActivePage}
            menuText="Products"
          />
        </ul>
      </nav>
      <li className="trolley-li">
        <a
          className="trolley"
          onClick={() => props.onChangeActivePage("Checkout")}
        >
          <i className="bi bi-cart4"></i>
        </a>
        <span className="cart-total">{props.cartTotal}</span>
      </li>
    </header>
  );
};
