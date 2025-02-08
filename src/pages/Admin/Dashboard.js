// src/pages/Admin/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const AdminDashboard = () => (
  <DashboardContainer>
    <h1>Admin Dashboard</h1>
    <nav>
      <ul>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
      </ul>
    </nav>
  </DashboardContainer>
);

export default AdminDashboard;