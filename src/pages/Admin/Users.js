// src/pages/Admin/Users.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../context/AuthContext';

const UsersContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AdminUsers = () => {
  const { users, updateUserRole } = useAuth(); // Add user management to AuthContext
  const [selectedRole, setSelectedRole] = useState('user');

  const handleRoleChange = (userId) => {
    updateUserRole(userId, selectedRole);
  };

  return (
    <UsersContainer>
      <h2>Manage Users</h2>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.email}</p>
            <select 
              value={user.role} 
              onChange={(e) => handleRoleChange(user.id, e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ))}
      </div>
    </UsersContainer>
  );
};

export default AdminUsers;