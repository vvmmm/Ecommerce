import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';



const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
`;
const AddToCartButton = styled.button`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: center;
  background-color:rgb(224, 23, 23);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color:rgb(185, 41, 58);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart,increment,decrement,quantity } = useCart();


  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.title} />
      </Link>
      <Content>
        <Link to={`/product/${product.id}`}>
          <Title>{product.title.slice(0,20)}...</Title>
        </Link>
        <div className='d-flex w-100'>
          <Price>₹{product.price}</Price>
          <del className='text-secondary ms-2'><Price>₹{product.price+100}</Price></del>
        </div>
        
   
        <AddToCartButton onClick={() => addToCart(product)}>
            
            Add to Cart
        </AddToCartButton>
          <div className="mt-2 d-flex quantity-container w-100 border border-primary rounded-3">
              <button onClick={()=>decrement(product)} className="quantity-button w-100 border border-primary rounded-start-3 p-1">-</button>
              <span className='w-100 text-center my-auto'>{quantity}</span>
              <button onClick={()=>increment(product.id)} className="quantity-button  w-100 border border-primary  rounded-end-3 p-1">+</button>
          </div>

       
      </Content>
    </Card>
  );
};

export default ProductCard;