import React from 'react';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import baseTheme from '../styles/theme';
import { useRootStore } from '../hooks';

const Container = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const Icon = styled.div<{ selected: boolean }>`
  font-size: 1.7rem;
  color: ${props => (props.selected ? baseTheme.colors.mix : baseTheme.colors.text)};
  cursor: pointer;
`;

const SelectViewButtons: React.FC = () => {
  const { uiStore } = useRootStore();

  return (
    <Container>
      <Icon selected={uiStore.viewMode === 'grid'} onClick={() => uiStore.changeViewMode('grid')}>
        <BiGridAlt />
      </Icon>
      <Icon selected={uiStore.viewMode === 'list'} onClick={() => uiStore.changeViewMode('list')}>
        <BiListUl />
      </Icon>
    </Container>
  );
};

export default observer(SelectViewButtons);
