import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../hooks';
import { Spinner } from './styled';
import baseTheme from '../styles/theme';

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const EmptyFilmList = styled.div`
  width: 100%;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.25rem 0.75rem;
  border-radius: 7px;
  cursor: pointer;
  background: ${baseTheme.colors.bgLighter};
  margin: 0.25rem;
  &:hover {
    background: ${baseTheme.colors.gradient};
    color: ${baseTheme.colors.bg};
  }
`;

const FilmName = styled.div`
  font-weight: 500;
  line-height: 1.2rem;
`;

const MoreInfo = styled.div`
  margin-top: 0.2rem;
  font-weight: 300;
  font-size: 0.8rem;
`;

const SearchResults: React.FC = () => {
  const { searchStore } = useRootStore();

  return (
    <div>
      {
        searchStore.searchLoading && <SpinnerContainer><Spinner size={40} strokeWidth={2} /></SpinnerContainer>
      }
      {
        (!searchStore.searchLoading && !!searchStore.searchResults?.length)
        && searchStore.searchResults.map(f => (
          <Result key={f.kId}>
            <FilmName>{f.name}</FilmName>
            <MoreInfo>
              {(f.rating && f.rating !== 'null') && <>Рейтинг: {f.rating}, </>} {(f.year && f.year !== 'null') && <>{f.year} г.</>}
            </MoreInfo>
          </Result>
        ))
      }
      {
        (!searchStore.searchLoading && !searchStore.searchResults?.length)
        && <EmptyFilmList>По вашему запросу ничего не найдено</EmptyFilmList>
      }
    </div>
  );
};

export default observer(SearchResults);
