// src/pages/Checkout/Checkout.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

// Styled Components
const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  min-height: 70vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const OrderSummary = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }
`;

const Checkout = () => {
  const { cartItems = [], totalPrice = 0, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const itemCount = safeCartItems.length;

//   useEffect(() => {
//     if (itemCount === 0 && !orderCompleted) {
//       navigate('/cart');
//     }
//   }, [itemCount, orderCompleted, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderCompleted(true);
      clearCart();
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

//   if (itemCount === 0 && !orderCompleted) return null;

  return (
    <CheckoutContainer className="container">
      {!orderCompleted ? (
        <>
          <CheckoutForm onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <FormGroup>
              <Label>Full Name</Label>
              <Input 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <FormGroup>
                <Label>City</Label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Postal Code</Label>
                <Input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </div>
            <FormGroup>
              <Label>Country</Label>
              <Input
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <CheckoutButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </CheckoutButton>
          </CheckoutForm>

          <OrderSummary>
            <h3>Order Summary</h3>
            {safeCartItems.map(item => (
              <SummaryItem key={item.id}>
                <div>
                  {item.title} x {item.quantity || 1}
                </div>
                <div>${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
              </SummaryItem>
            ))}
            <SummaryItem>
              <div>Total:</div>
              <div>${totalPrice.toFixed(2)}</div>
            </SummaryItem>
          </OrderSummary>
        </>
      ) : (
        <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
          <h2>Thank you for your order! 🎉</h2>
          <p>Your order has been placed successfully.</p>
          <Link to="/" style={{ color: '#27ae60' }}>
            Continue Shopping
          </Link>
        </div>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
