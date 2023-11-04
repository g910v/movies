import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import baseTheme from '../../styles/theme';

interface IItem {
  key: number,
  label: string,
}
interface Props {
  items: IItem[],
  selectedItem: IItem,
  setSelectedItem: React.Dispatch<React.SetStateAction<IItem>>,
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

const StyledButton = styled.div<{ selected: boolean }>`
  position: relative;
  padding: 0.2rem;
  cursor: pointer;
  color: ${props => (!props.selected ? baseTheme.colors.textSecondary : baseTheme.colors.text)};
  &:hover {
    color: ${baseTheme.colors.text};
  }
  ${props => (
    props.selected && css`
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
    `
  )}

`;

const SelectButton: React.FC<Props> = ({ items, selectedItem, setSelectedItem }) => (
  <Container>
    {
      items.map(i => (
        <StyledButton
          onClick={() => setSelectedItem(i)}
          key={i.key}
          selected={i.key === selectedItem.key}
        >
          {i.label}
        </StyledButton>
      ))
    }
  </Container>
);

export default SelectButton;
