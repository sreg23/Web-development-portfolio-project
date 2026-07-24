import React from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

function OrderPage() {
  return (
    <>
      <h2>Order</h2>
      <p>Use this page to place an order for products.</p>
      <article>
        <table>
          <caption>Select one item to order</caption>
          <thead>
            <tr>
              <th>Company</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow product={product} key={index} />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default OrderPage;