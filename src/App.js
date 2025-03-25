
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCart from "./shoppingCart";
import CartSummary from "./CartSummary";
import 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/cart-summary" element={<CartSummary />} />
      </Routes>
    </Router>
  );
}
// Jabadast Project
export default App;





































//find error134 ShoppingCart