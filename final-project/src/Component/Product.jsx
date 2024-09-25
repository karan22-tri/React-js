import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';
import './Product.css';
import Navbar from './Navbar'; 

export default function Product() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:50000/products')  
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            parsedCart.forEach(item => dispatch(addToCart(item)));
        }
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        const storedCart = localStorage.getItem('cart');
        let updatedCart = storedCart ? JSON.parse(storedCart) : [];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleSort = (event) => {
        const select = event.target.value;
        setSortOption(select);

        let sortedProducts = [...products];

        switch(select) {
            case "low":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "high":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "az":
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "za":
                sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <Navbar />
            <select value={sortOption} onChange={handleSort} id="sort">
                <option value="">Sort by</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
            </select>
            <h1>Bestsellers</h1>
            <div id="main">
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} id="pic" />
                        <h2 className="title">{product.title}</h2>
                        <p className="pr">${product.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                ))}
            </div>
            <div className="sec"></div>
        </div>
    );
}
