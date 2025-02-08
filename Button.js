import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.1em;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ to, children }) => (
  <StyledButton to={to}>
    {children}
  </StyledButton>
);

export default Button;