import React, { useContext } from 'react';
import { ProductContext } from '../Contexts/ContextProvider';

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product.id} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{width:"200px"}} />
          <h4>Price: ${product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Products;
