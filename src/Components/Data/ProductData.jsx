const url = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
