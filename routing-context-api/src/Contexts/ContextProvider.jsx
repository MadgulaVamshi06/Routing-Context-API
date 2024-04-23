import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        console.log(products)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ContextProvider, ProductContext };
