import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setOrderPlaced(false);
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
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckoutShopping} disabled={cart.length === 0}>
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

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="checkout-overlay">
          <div className="checkout-modal">
            {!orderPlaced ? (
              <>
                <h2>Checkout</h2>
                <div className="checkout-order-summary">
                  <h3>Order Summary</h3>
                  {cart.map((item, index) => (
                    <div className="checkout-item-row" key={index}>
                      <span>{item.name} × {item.quantity}</span>
                      <span>${calculateTotalCost(item)}</span>
                    </div>
                  ))}
                  <div className="checkout-total-row">
                    <strong>Total</strong>
                    <strong>${calculateTotalAmount()}</strong>
                  </div>
                </div>
                <div className="checkout-form">
                  <h3>Delivery Details</h3>
                  <input type="text" placeholder="Full Name" className="checkout-input" />
                  <input type="email" placeholder="Email Address" className="checkout-input" />
                  <input type="text" placeholder="Delivery Address" className="checkout-input" />
                  <h3>Payment</h3>
                  <input type="text" placeholder="Card Number (demo)" className="checkout-input" />
                  <div className="checkout-card-row">
                    <input type="text" placeholder="MM/YY" className="checkout-input half" />
                    <input type="text" placeholder="CVV" className="checkout-input half" />
                  </div>
                </div>
                <div className="checkout-modal-actions">
                  <button className="cancel-btn" onClick={handleCloseCheckout}>Cancel</button>
                  <button className="place-order-btn" onClick={handlePlaceOrder}>
                    Place Order — ${calculateTotalAmount()}
                  </button>
                </div>
              </>
            ) : (
              <div className="order-confirmed">
                <div className="order-confirmed-icon">🎉</div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for shopping at Paradise Nursery.</p>
                <p>Your plants are on their way! 🌿</p>
                <button className="continue-shopping-btn" onClick={handleCloseCheckout}>
                  Back to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
