import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; 

const Navbar = () => {
    const cartItems = useSelector(state => state.cart);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MyShop</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Sign In</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        Cart
                        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
