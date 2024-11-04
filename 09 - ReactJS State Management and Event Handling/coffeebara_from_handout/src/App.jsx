import { useState } from 'react';
import './App.css';
import useCart from './utils/useCart.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

function App() {
    // Destructure useCart() hook
    // Initialize React state hook for inputValue

    const addItemToCart = () => {
        // Handle adding an item to the shopping cart
    };

    return (
        <>
            <h3>COFFEE BAR</h3>
            <p>Number of orders: {cartTotal}</p>

            <label htmlFor="food">Order Food: </label>
            <input
                type="text"
                name="food"
                id="item"
                placeholder="Enter your order"
                // Define value for input
                // Create an onChange event handler
            />
            
            <div>
                {/* Reuse ShoppingCart component and pass the item */}
                {/* Create an "Add to Cart" button with event handling */}
            </div>
        </>
    );
}

export default App;
