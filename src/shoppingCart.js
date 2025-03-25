import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";
import 'font-awesome/css/font-awesome.css';
import DeleteIcon from "@mui/icons-material/Delete";


const products = [
  { id: 1, name: "OnePlus Nord CE4", price: 24998, image: "https://image01-in.oneplus.net/media/202407/04/33f3107e4204f5f6f418074a84c39205.png" },
  { id: 2, name: "Motorola G45 5G", price: 11747, image: "https://motorolaid.vtexassets.com/arquivos/ids/155412-1600-auto?width=1600&height=auto&aspect=true" },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
    // Load cart from localStorage when the component mounts
    useEffect(() => {
      // const storedCart = localStorage.getItem("cart");
      const storedCart = sessionStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      let updatedCart;
  
      if (itemExists) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store updated cart in localStorage
      sessionStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };
  
  

  const openCartSummary = () => {
    navigate("/cart-summary"); // Open summary in a new tab
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount} : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity reaches 0
  
      // localStorage.setItem("cart", JSON.stringify(updatedCart));
      sessionStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };
  
  return (
    <div className="shopping-container">
      <h2>📱 Mobile Phones</h2>
      <div className="product-list">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                {cartItem ? (
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(product.id, -1)} ><DeleteIcon/></button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                ) : (
                  <button className="add-cart-btn" onClick={() => addToCart(product)}>
                    🛒 Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Button to open Cart Summary in a new tab */}
      <button className="buy-btn" onClick={openCartSummary}>🛒 View Cart</button>
    </div>
  );
};

export default ShoppingCart;
