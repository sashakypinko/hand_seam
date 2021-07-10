import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px 32px;
  border: ${({ variant, color }) => (variant === 'outlined' ? `1px solid ${color}` : 'none')};
  background: ${({ variant, color }) => (variant === 'contained' ? color : '#ffffff')};
  color: ${({ variant, color }) => (variant === 'contained' ? '#ffffff' : color)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  font-size: 14px;
  border-radius: 30px;
  height: 50px;
  transition: background-color 0.3s ease-in-out;

  :focus {
    outline: none;
  }
`;

const Button = ({
    variant = 'contained',
    color = '#4874b3',
    fullWidth = false,
    children,
    ...props
}) => {
    return (
        <StyledButton fullWidth={fullWidth} variant={variant} color={color} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
