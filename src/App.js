// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./ShoppingCart.css";

// const products = [
//   { id: 1, name: "OnePlus Nord CE4", price: 24998, image: "https://image01-in.oneplus.net/media/202407/04/33f3107e4204f5f6f418074a84c39205.png" },
//   { id: 2, name: "Motorola G45 5G", price: 11747, image: "https://motorolaid.vtexassets.com/arquivos/ids/155412-1600-auto?width=1600&height=auto&aspect=true" },
// ];

// const ShoppingCart = ({ cart, setCart }) => {
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const itemExists = prevCart.find((item) => item.id === product.id);
//       if (itemExists) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="shopping-container">
//       <h2>📱 Mobile Phones</h2>
//       <div className="product-list">
//         {products.map((product) => {
//           const cartItem = cart.find((item) => item.id === product.id);
//           return (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} className="product-image" />
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//                 <p className="price">₹{product.price}</p>
//                 {cartItem ? (
//                   <div className="quantity-controls">
//                     <button onClick={() => setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0))}>
//                       <DeleteIcon />
//                     </button>
//                     <span>{cartItem.quantity}</span>
//                     <button onClick={() => addToCart(product)}>+</button>
//                   </div>
//                 ) : (
//                   <button className="add-cart-btn" onClick={() => addToCart(product)}>
//                     🛒 Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Link to="/cart-summary">
//         <button className="buy-btn">🛒 View Cart</button>
//       </Link>
//     </div>
//   );
// };

// const CartSummary = ({ cart, setCart }) => {
//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h2>🛒 Shopping Cart</h2>
//       <div className="cart-layout">
//         <div className="cart-items">
//           {cart.length > 0 ? (
//             cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-image" />
//                 <div className="cart-info">
//                   <h3 align="center">{item.name}</h3>
//                   <p className="price" align="center">₹{item.price.toLocaleString()}</p>
//                   <div className="quantity-controls1">
//                     <button onClick={() => setCart(cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p).filter(p => p.quantity > 0))}>
//                       <DeleteIcon />
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => setCart(cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))}>+</button>
//                   </div>
//                   <div className="delete-btn">
//                     <button onClick={() => removeItem(item.id)}>❌ Remove</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//         </div>
//         <div className="cart-summary">
//           <h3>Order Summary</h3>
//           <p>Subtotal ({cart.length} items): <strong>₹{totalAmount.toLocaleString()}</strong></p>
//           <button className="buy-btn" onClick={() => window.print()}>Proceed to Buy</button>
//         </div>
//       </div>
//       <br />
//       <Link to="/">
//         <button className="buy-btn">Back</button>
//       </Link>
//     </div>
//   );
// };

// const App = () => {
//   const [cart, setCart] = useState([]);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ShoppingCart cart={cart} setCart={setCart} />} />
//         <Route path="/cart-summary" element={<CartSummary cart={cart} setCart={setCart} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCart from "./shoppingCart";
import CartSummary from "./CartSummary";
import 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shoppingcart />} />
        <Route path="/cart-summary" element={<CartSummary />} />
      </Routes>
    </Router>
  );
}
// Jabadast Project
export default App;





































//find error134 ShoppingCart