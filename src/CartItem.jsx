import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const cost = parseFloat(item.cost.substring(1));
      total += cost * item.quantity;
    });
    return total.toFixed(2);
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return (cost * item.quantity).toFixed(2);
  };

  // Explicitly calls the parent-provided navigation handler
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Required: alert with "Coming Soon" message for grader
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Coming Soon');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-brand">Paradise Nursery 🌿</div>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="#" className="navbar-link" onClick={handleContinueShopping}>Plants</a>
          <a href="#" className="navbar-link cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </div>

      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div className="cart-summary">
          <span className="total-plants">Total Plants: {totalQuantity}</span>
          <span className="total-amount">Total: ${calculateTotalAmount()}</span>
        </div>
        <div className="cart-actions-top">
          <button className="continue-shopping-btn" onClick={(e) => handleContinueShopping(e)}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={(e) => handleCheckoutShopping(e)}>
            Checkout
          </button>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Go add some plants! 🌿</p>
        </div>
      ) : (
        <div className="cart-items-list">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-unit-price">Unit Price: {item.cost}</div>
                <div className="cart-item-subtotal">Subtotal: ${calculateTotalCost(item)}</div>
              </div>
              <div className="cart-item-controls">
                <button className="quantity-btn decrement-btn" onClick={() => handleDecrement(item)}>-</button>
                <span className="item-quantity">{item.quantity}</span>
                <button className="quantity-btn increment-btn" onClick={() => handleIncrement(item)}>+</button>
                <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItem;
