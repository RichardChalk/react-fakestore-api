import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { fetchProducts, fetchLocalProducts } from "./Data/ProductData";

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onSearchChange = (e) => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // ==============================================================
  // Option 1 API - API - API - API - API - API - API - API - API -
  // Option 1 API - API - API - API - API - API - API - API - API -
  // Option 1 API - API - API - API - API - API - API - API - API -
  // Option 1 API - API - API - API - API - API - API - API - API -
  useEffect(() => {
    fetchProducts().then((result) => {
      setProducts(result);
      setFilteredProducts(result);
    });

    // async await option
    // const fetchData = async()=>{
    //     const result = await fetchProducts()
    //     setProducts(result)
    //     setFilteredProducts(result);
    //   }
    //   fetchData()
  }, []);

  // =========================================================================
  // Option 2 Local data - Local data - Local data - Local data - Local data -
  // Option 2 Local data - Local data - Local data - Local data - Local data -
  // Option 2 Local data - Local data - Local data - Local data - Local data -
  // Option 2 Local data - Local data - Local data - Local data - Local data -

  // Jag valde Local data... jag var så trött på att API:n var upp o ner hela tiden
  // useEffect(() => {
  //   const data = fetchLocalProducts();
  //   setProducts(data);
  //   setFilteredProducts(data);
  // }, []);

  return (
    <section className="products container" id="products">
      <h1 className="products-heading">our full range of products</h1>

      <div className="input-group search">
        <input
          name="search"
          onChange={onSearchChange}
          type="search"
          className="form-control rounded"
          placeholder="What are you looking for?"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-success">
          search
        </button>
      </div>

      <div className="productgallery">
        {filteredProducts.map((p) => (
          <Product
            key={p.id}
            product={p}
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
