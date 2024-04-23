// ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Contexts/ContextProvider';// Adjust the import path as needed

const ProductDetails = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={"200px"} />
      <h4>{product.description}</h4>
      <h2>Rs.{product.price}</h2>
    </div>
  );
};

export default ProductDetails;
