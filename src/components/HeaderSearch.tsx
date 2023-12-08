import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiX } from 'react-icons/bi';
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

const SearchIcon = styled.div`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const SearchInput = styled.div`
  width: 50%;
  display: flex;
  position: relative;
`;

const ResultPanel = styled.div`
  position: absolute;
  top: 3.5rem;
  max-height: 55vh;
  width: calc(100% - 5.5rem);
  background: ${baseTheme.colors.bgSecondary};
  z-index: 10;
  padding: 1rem;
  border-radius: 5px;
`;

const ResultScroll = styled.div`
  max-height: 55vh;
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
        <SearchIcon onClick={onCloseSearch}>
          <BiX />
        </SearchIcon>
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
