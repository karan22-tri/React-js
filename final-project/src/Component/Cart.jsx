import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/action';

export default function Cart() {
    const shippingFee = 5;
    const taxRate = 0.1; 

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function deleteItem(productId) {
        dispatch(removeFromCart(productId));
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function increaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            dispatch(updateQuantity(productId, item.quantity + 1));
        }
    }

    function decreaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            dispatch(updateQuantity(productId, item.quantity - 1));
        } else if (item && item.quantity === 1) {
            deleteItem(productId);
        }
    }

    function proceedToPayment() {
        alert("Redirecting to payment page...");
        
    }

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    const paymentTotal = total + shippingFee + (total * taxRate);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <>
                    <p>Your cart is empty.</p>
                    <img src="https://media.giphy.com/media/3ohhwsjzpejaSWoTkI/giphy.gif" alt="" width={500}/>
                </>
            ) : (
                <>
                    <div id="cart">
                        {cart.map((el) => (
                            <div key={el.id} className="cart-item">
                                <img src={el.image} alt={el.title} />
                                <div className="item-details">
                                    <h3>{el.title}</h3>
                                    <p>Price: ${el.price.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(el.id)}>-</button>
                                        <span>{el.quantity}</span>
                                        <button onClick={() => increaseQuantity(el.id)}>+</button>
                                    </div>
                                    <button onClick={() => deleteItem(el.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="order-summary">
                        <h2>Order Summary</h2>
                        <p>Subtotal: ${total.toFixed(2)}</p>
                        <p>Shipping: ${shippingFee.toFixed(2)}</p>
                        <p>Tax: ${(total * taxRate).toFixed(2)}</p>
                        <h3>Total: ${paymentTotal.toFixed(2)}</h3>
                        <button onClick={proceedToPayment}>Proceed to Payment</button>
                    </div>
                </>
            )}
        </div>
    );
}
