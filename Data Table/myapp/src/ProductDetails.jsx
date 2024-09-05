import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img 
              src={product.image} 
              alt={product.name} 
              style={{ height: '200px', width: '200px' }} // Add height and width styles
            />

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;