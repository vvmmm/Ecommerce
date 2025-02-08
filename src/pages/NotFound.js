import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiFrown } from 'react-icons/fi';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const NotFound = () => (
  <NotFoundContainer className="container">
    <FiFrown size="4rem" />
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/">Return to Home</Link>
  </NotFoundContainer>
);

export default NotFound;