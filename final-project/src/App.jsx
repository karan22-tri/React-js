import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Product from './Component/Product';
import Cart from './Component/Cart'; 
import Login from './Component/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
