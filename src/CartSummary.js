import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ShoppingCart.css";
import 'font-awesome/css/font-awesome.css';
import DeleteIcon from "@mui/icons-material/Delete";
// import updateQuantity from "./shoppingCart"



const CartSummary = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // const storedCart = localStorage.getItem("cart");
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update Quantity
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity reaches 0
  
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      sessionStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };
  

  // Remove Item from Cart
  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Navigate back to ShoppingCart
  const goBackToShopping = () => {
    navigate("/"); // Redirect to ShoppingCart (adjust route if necessary)
  };

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>
      <div className="cart-layout">
        {/* Left: Cart Items */}
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image"/>
                <div className="cart-info">
                  <h3 align="center">{item.name}</h3>
                  <p className="price" align="center">₹{item.price.toLocaleString()}</p>
                  <div className="quantity-controls1">
                    <button onClick={() => updateQuantity(item.id, -1)} ><DeleteIcon /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} >+</button>
                  </div>
                  <div className="delete-btn" >
                  <button onClick={() => removeItem(item.id)}>❌Remove</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Right: Cart Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal ({cart.length} items): <strong>₹{totalAmount.toLocaleString()}</strong></p>
          <button className="buy-btn" onClick={() => window.print()}>Proceed to Buy</button>
        </div>
      </div>
      <br/>
      {/* Back Button */}
      <button className="buy-btn" onClick={goBackToShopping}>Back</button>
    </div>
  );
};

export default CartSummary;
