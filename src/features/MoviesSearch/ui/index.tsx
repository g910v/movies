import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-transition-group';
import SearchResults from './SearchResult';
import { useRootStore } from '../../../shared/libs/hooks';
import baseTheme from '../../../shared/styles/theme';
import { Input } from '../../../shared/ui';

interface Props {
  closeSearch: () => void,
}

const SearchContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: -1.3rem;
`;

const SearchInput = styled.div`
  width: 100%;
  position: relative;
`;

const ResultPanel = styled.div<{state: string}>`
  position: absolute;
  top: 3.5rem;
  height: fit-content;
  width: calc(100% - 2rem);
  background: ${baseTheme.colors.bgSecondary};
  z-index: 10;
  padding: 1rem;
  border-radius: 5px;
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  transform: scaleY(${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')});
  transform-origin: top;
  transition: all 0.2s ease-in;
`;

const ResultScroll = styled.div`
  max-height: 68vh;
  width: 100%;
  overflow-y: scroll;
`;

const HeaderSearch: React.FC<Props> = ({ closeSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const { searchStore } = useRootStore();

  const onCloseSearch = () => {
    closeSearch();
    searchStore.resetSearchResults();
  };

  useEffect(() => {
    if (inputValue.length <= 2) {
      searchStore.resetSearchResults();
    }
    const timer = setTimeout(() => {
      if (inputValue.length > 2) {
        searchStore.searchFilms(inputValue);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, searchStore]);

  return (
    <SearchInput>
      <SearchContainer>
        <Input placeholder="Поиск фильмов и сериалов" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <Transition in={!!searchStore.searchResults} timeout={250} mountOnEnter unmountOnExit>
          {
            state => (
              <ResultPanel state={state}>
                <ResultScroll>
                  <SearchResults onCloseSearch={onCloseSearch} />
                </ResultScroll>
              </ResultPanel>
            )
          }
        </Transition>
      </SearchContainer>
    </SearchInput>
  );
};

export default observer(HeaderSearch);
