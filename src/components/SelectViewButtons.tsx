import React from 'react';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import baseTheme from '../styles/theme';
import { useRootStore } from '../hooks';

const Container = styled.div`
  display: flex;
  background: ${baseTheme.colors.bgLighter};
  border-radius: 5px;
  transition: all .2s linear;
  border: 1px solid ${baseTheme.colors.bg};
  &:hover {
    border: 1px solid ${baseTheme.colors.simpleButton};
  }
`;

const Divider = styled.div`
  background: ${baseTheme.colors.simpleButton};
  width: 1px;
  margin: 0.35rem 0;
`;

const IconGrid = styled(BiGridAlt)<{ selected: boolean }>`
  font-size: 1.7rem;
  color: ${props => (props.selected ? baseTheme.colors.mix : baseTheme.colors.text)};
  cursor: pointer;
  transition: all .2s linear;
  padding: 0.5rem;
`;

const IconList = styled(BiListUl)<{ selected: boolean }>`
  font-size: 1.7rem;
  color: ${props => (props.selected ? baseTheme.colors.mix : baseTheme.colors.text)};
  cursor: pointer;
  transition: all .2s linear;
  padding: 0.5rem;
`;

const SelectViewButtons: React.FC = () => {
  const { uiStore } = useRootStore();

  return (
    <Container>
      <IconGrid selected={uiStore.viewMode === 'grid'} onClick={() => uiStore.changeViewMode('grid')} />
      <Divider />
      <IconList selected={uiStore.viewMode === 'list'} onClick={() => uiStore.changeViewMode('list')} />
    </Container>
  );
};

export default observer(SelectViewButtons);
