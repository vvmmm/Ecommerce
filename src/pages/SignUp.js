import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const SignupContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

// Reuse Form, Input, Button styles from Login

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simulate API call
    if(name && email && password) {
      login({ email, name });
      navigate('/');
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className='form form-control'>
        <input
          type="text"
          placeholder="Name"
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br></br>
        <input
          type="email"
          placeholder="Email"
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br></br>
        <input
          type="password"
          placeholder="Password"
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br></br>
        <button type="submit" className='form-control btn btn-success' >Sign Up</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Already have an account? <Link to="/login" className='text-primary'>Login</Link>
      </p>
    </SignupContainer>
  );
};

export default Signup;