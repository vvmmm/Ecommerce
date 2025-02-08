import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent className="container">
      <FooterSection>
        <h4>E-Shop</h4>
        <p>Your trusted online shopping destination</p>
      </FooterSection>
      <FooterSection>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h4>Contact</h4>
        <p>Email: support@eshop.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </FooterSection>
    </FooterContent>
  </FooterContainer>
);

export default Footer;