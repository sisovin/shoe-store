import { useState } from 'react';

export default function Cart({ items, onUpdateQuantity, onRemoveItem }) {
  const [cartItems, setCartItems] = useState(items);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    onUpdateQuantity(id, quantity);
  };

  const handleRemoveItem = id => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    onRemoveItem(id);
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                  className="cart-item-quantity"
                />
                <button onClick={() => handleRemoveItem(item.id)} className="cart-item-remove">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
