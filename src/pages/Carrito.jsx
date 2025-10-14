import React from 'react';
import '../styles/carrito.css';

const Cart = () => {
  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          <div className="empty-cart">
            <p>Tu carrito está vacío</p>
          </div>
        </div>
        
        <div className="cart-summary">
          <div className="summary-title">Resumen</div>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span id="subtotal">$0.00</span>
          </div>
          <div className="summary-item">
            <span>Envío:</span>
            <span id="shipping">$0.00</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span id="total">$0.00</span>
          </div>
          <button className="pay-btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;