import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';

const ErrorContainer = styled.div`
  color: #dc3545;
  padding: 2rem;
  text-align: center;
`;

const Icon = styled(FiAlertTriangle)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = ({ message }) => (
  <ErrorContainer>
    <Icon />
    <p>{message || 'Something went wrong. Please try again later.'}</p>
  </ErrorContainer>
);

export default ErrorMessage;