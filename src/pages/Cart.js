// src/pages/Cart/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';

// Styled Components (should be defined before the Cart component)
const CartContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 1.1rem;
  color: #3498db;
  margin: 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    justify-content: flex-end;
  }
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;

const TotalSection = styled.div`
  margin-top: 2rem;
  text-align: right;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const TotalText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0;
`;

const CheckoutButton = styled(Link)`
  display: inline-block;
  background: #27ae60;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #219a52;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

// Cart Component
const Cart = () => {
  const { 
    items: cartItems = [],
    removeFromCart, 
    totalPrice = 0, 
    totalItems = 0 
  } = useCart();

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];

  return (
    <CartContainer className="container">
     <CartTitle>Shopping Cart ({totalItems} items)</CartTitle>
      
      {safeCartItems.length === 0 ? (
        <EmptyCart>
          <h2 className='color-danger'>Your cart is empty</h2>
          <Link to="/products" className="continue-shopping btn btn-primary">
            Continue Shopping
          </Link>
        </EmptyCart>
      ) : (
        <>
          {safeCartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <ItemDetails>
                <ItemName>{item.title}</ItemName>
                <ItemPrice>${(item.price || 0).toFixed(2)}</ItemPrice>
                <p>Quantity: {item.quantity || 1}</p>
              </ItemDetails>
              <QuantityControl>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FiTrash2 />
                  Remove
                </RemoveButton>
              </QuantityControl>
            </CartItem>
          ))}

          <TotalSection>
            <TotalText>Subtotal: ${totalPrice.toFixed(2)}</TotalText>
            <TotalText>Total Items: {totalItems}</TotalText>
            <CheckoutButton to="/checkout">
              Proceed to Checkout
            </CheckoutButton>
          </TotalSection>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;