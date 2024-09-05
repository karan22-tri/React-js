import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        localStorage.setItem('products', JSON.stringify(data));
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'asc') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'desc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <>
    <center>
    <h1>Product List</h1>
    </center>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <label style={{marginLeft:'10px'}}>
        Sort by:
        <select value={sortOption} onChange={handleSortChange} style={{marginLeft:'10px'}}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {sortedProducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          sortedProducts.map(product => (
            <div key={product.id} style={{ margin: '10px' }}>
              <h2 style={{fontSize:'10px'}}>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                style={{ height: '200px', width: '200px' }}
              />
              <Link to={`/product/${product.id}`}>View Details</Link>
            <Link to='/cart'>  <button onClick={() => addToCart(product)}>Add to Cart</button></Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductList;
