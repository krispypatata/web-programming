import { useState } from 'react';
import './App.css';
import useCart from './utils/useCart.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

function App() {
    // Destructure useCart() hook
    const { handleSubmit, cartTotal, cart } = useCart();

    // Initialize React state hook for inputValue
    const [inputValue, setInputValue] = useState("");

    const addItemToCart = () => {
        // Handle adding an item to the shopping cart
        handleSubmit(inputValue);
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
                value={inputValue}
                // Create an onChange event handler
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <div>
                <h3>ORDER FOOD</h3>
                {/* Reuse ShoppingCart component and pass the item */}
                <ShoppingCart items={cart}/>
                {/* Create an "Add to Cart" button with event handling */}
                <button onClick={addItemToCart}>Add to Cart</button>
            </div>
        </>
    );
}

export default App;
