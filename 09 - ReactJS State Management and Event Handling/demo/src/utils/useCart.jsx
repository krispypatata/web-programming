import { useState } from "react";

export default function useCart() {

    // Create hooks for cart total
    const [cartTotal, setCartTotal] = useState(0);
    // Create hooks for cart (items)
    const [cart, setCart] = useState([]);

    const handleSubmit = (item) => {
        // Output added to cart
        console.log(item + " added to cart!");

        // SetCart
        setCart((cartItem) => [...cartItem, item]);

        // Set Cart Total
        setCartTotal((cartTotal) => cartTotal + 1);
    }

    return {
        handleSubmit,
        cartTotal,
        cart
    }
}