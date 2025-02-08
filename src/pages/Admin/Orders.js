// src/pages/Admin/Orders.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../../context/CartContext';

const OrdersContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AdminOrders = () => {
  const { orders } = useCart(); // Add orders to your CartContext

  return (
    <OrdersContainer>
      <h2>Manage Orders</h2>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </OrdersContainer>
  );
};

export default AdminOrders;