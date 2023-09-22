import React from 'react';

const CartPage = () => {
    return (
        <div className="container">
  <h1>Your Cart</h1>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Product 1</td>
        <td>$19.99</td>
        <td>2</td>
        <td>$39.98</td>
      </tr>
      <tr>
        <td>Product 2</td>
        <td>$24.99</td>
        <td>1</td>
        <td>$24.99</td>
      </tr>
    </tbody>
  </table>
  <p className="total">Total: $64.97</p>
  <p className="empty-cart">Your cart is empty.</p>
</div>

    );
}

export default CartPage;