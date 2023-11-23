import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import baseTheme from '../../styles/theme';

interface IItem {
  key: number,
  label: string,
  short: string,
}
interface Props {
  items: IItem[],
}

const Container = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

const showSelect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledButton = styled(NavLink)`
  position: relative;
  padding: 0.2rem;
  cursor: pointer;
  &.active {
    color: ${baseTheme.colors.text}
  }
  color: ${baseTheme.colors.textSecondary};
  &:hover {
    color: ${baseTheme.colors.text};
  }
  &.active {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -3px;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background: ${baseTheme.colors.gradient};
      animation: ${showSelect} 0.5s linear;
    }
  }
`;

const SelectButton: React.FC<Props> = ({ items }) => (
  <Container>
    {
      items.map(i => (
        <StyledButton
          key={i.key}
          to={i.short}
        >
          {i.label}
        </StyledButton>
      ))
    }
  </Container>
);

export default SelectButton;
