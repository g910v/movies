import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useRootStore } from '../../../shared/libs/hooks';
import baseTheme from '../../../shared/styles/theme';
import { Spinner } from '../../../shared/ui';

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const EmptyFilmList = styled.div`
  width: 100%;
`;

const Result = styled(Link)`
  color: ${baseTheme.colors.text};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.25rem 0.75rem;
  border-radius: 5px;
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

interface Props {
  onCloseSearch: () => void,
}

const SearchResults: React.FC<Props> = ({ onCloseSearch }) => {
  const { searchStore } = useRootStore();

  return (
    <div>
      {
        searchStore.searchLoading && <SpinnerContainer><Spinner size={40} strokeWidth={2} /></SpinnerContainer>
      }
      {
        (!searchStore.searchLoading && !!searchStore.searchResults?.length)
        && searchStore.searchResults.map(f => (
          <Result key={f.kId} to={`/movie/${f.kId}`} onClick={onCloseSearch}>
            <FilmName>{f.name}</FilmName>
            <MoreInfo>
              {(f.rating && f.rating !== 'null') && <>Рейтинг: {f.rating}, </>} {(f.year && f.year !== 'null') && <>{f.year} г.</>}
            </MoreInfo>
          </Result>
        ))
      }
      {
        (!searchStore.searchLoading && !!searchStore.searchResults && !searchStore.searchResults?.length)
        && <EmptyFilmList>По вашему запросу ничего не найдено</EmptyFilmList>
      }
    </div>
  );
};

export default observer(SearchResults);
