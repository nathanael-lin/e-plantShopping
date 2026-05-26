import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

// CartItem component displays the shopping cart page with all cart items,
// quantity controls, item totals, and checkout/continue shopping actions.
const CartItem = ({ onContinueShopping }) => {
  // Retrieve cart items from the Redux global store
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  // Iterates over each item, strips the '$' from cost, multiplies by quantity,
  // and accumulates a running total.
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const cost = parseFloat(item.cost.substring(1));
      total += cost * item.quantity;
    });
    return total.toFixed(2);
  };

  // Navigate back to the product listing page using the handler passed from App.jsx
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Alert the user that checkout functionality will be added in a future release
  const handleCheckoutShopping = (e) => {
    alert('Coming Soon');
  };

  // Increase the quantity of the given item by 1 via Redux updateQuantity action
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrease the quantity of the given item by 1.
  // If quantity reaches 0, dispatch removeItem to remove it from the cart entirely.
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove a specific item from the cart entirely via Redux removeItem action
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  // Strips the '$' prefix from the cost string and multiplies by item quantity.
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return (cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      {/* Display the grand total cost for all items currently in the cart */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {/* Render each cart item with its image, name, cost, quantity controls, subtotal, and delete button */}
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              {/* Display plant name */}
              <div className="cart-item-name">{item.name}</div>
              {/* Display unit price */}
              <div className="cart-item-cost">{item.cost}</div>
              {/* Quantity increment / decrement controls */}
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              {/* Display subtotal for this item type */}
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              {/* Remove this item from the cart entirely */}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder div reserved for displaying total cart amount summary */}
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>

      {/* Action buttons: Continue Shopping navigates back to product listing;
          Checkout alerts the user that this feature is coming soon */}
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
