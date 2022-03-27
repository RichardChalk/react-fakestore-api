import React from "react";

export const Home = (props) => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Welcome to RICH Products!</h1>
        <h2>Online shopping</h2>
        <p>Thousands of great deals waiting just for you!</p>
        <a
          className="cta-button"
          onClick={() => props.onChangeActivePage("Products")}
        >
          Buy now!
        </a>
      </div>
    </section>
  );
};
