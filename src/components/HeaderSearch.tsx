import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import baseTheme from '../styles/theme';
import { Input } from './styled';
import SearchResults from './SearchResults';
import { useRootStore } from '../hooks';

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

const ResultPanel = styled.div`
  position: absolute;
  top: 3.5rem;
  max-height: 68vh;
  width: calc(100% - 2rem);
  background: ${baseTheme.colors.bgSecondary};
  z-index: 10;
  padding: 1rem;
  border-radius: 5px;
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
        {
          searchStore.searchResults && (
            <ResultPanel>
              <ResultScroll>
                <SearchResults onCloseSearch={onCloseSearch} />
              </ResultScroll>
            </ResultPanel>
          )
        }
      </SearchContainer>
    </SearchInput>
  );
};

export default observer(HeaderSearch);
