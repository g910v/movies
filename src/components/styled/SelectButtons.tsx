import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
}

const StyledButton = styled.button`
  padding: 0.2rem;
`;

const Button: React.FC<Props> = ({ label, ...props }) => (
  <StyledButton {...props}>{label}</StyledButton>
);

export default Button;
