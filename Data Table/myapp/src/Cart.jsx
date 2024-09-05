import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const editTodo = (name, index) => {
    const newName = prompt("Edit product name:", name);
    if (newName) {
      const updatedCart = [...cart];
      updatedCart[index].name = newName;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const deleteTodo = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ height: '200px', width: '200px' }} 
            />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className='border mb-2 border-black p-1 rounded-xl w-20 ms-3' onClick={() => editTodo(product.name, index)}>Edit</button>
            <button className='border mb-2 border-black p-1 rounded-xl w-20 ms-3' onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
