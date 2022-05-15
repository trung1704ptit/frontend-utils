import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState({});

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {products.map(({ image, title, price, id }) => (
        <div key={id} className="container">
          <img src={image} alt="store" />
          <p>{title}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
