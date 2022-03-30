import LocalData from "./LocalData";

// API API API API API API API API API API API API API API API
const url = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

// LOCAL LOCAL LOCAL LOCAL LOCAL LOCAL LOCAL LOCAL LOCAL LOCAL
// Jag valde Local data... jag var så trött på att API var upp o ner hela tiden
const urlLocal = "LocalData.jsx";

export const fetchLocalProducts = () => {
  const data = LocalData;

  return data;
};
