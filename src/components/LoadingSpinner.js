import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
  font-size: 3rem;
  margin: 2rem auto;
  display: block;
`;

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;