import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { BiChevronsDown } from 'react-icons/bi';
import { useRootStore } from '../../../shared/libs/hooks';
import { Spinner } from '../../../shared/ui';
import {
  MovieBigCard, MovieSmallCard, TPremiereFilters, countries, genres,
} from '../../../entities';
import baseTheme, { textGradient } from '../../../shared/styles/theme';

const grid = css`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  @media ${baseTheme.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`;

const list = css`
  display: flex;
  flex-wrap: wrap;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const MoreButton = styled.div`
  width: fit-content;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

const MoreIcon = styled(BiChevronsDown)`
  font-size: 1.5rem;
`;

const Container = styled.div<{viewmode: string}>`
  ${props => (props.viewmode === 'grid' ? grid : list)};
  row-gap: 1rem;
  width: 100%;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyFilmList = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

interface Props {
  type: 'FILM' | 'TV_SERIES' | 'PREMIERES',
  isTop?: boolean,
  premiereFilters?: TPremiereFilters,
}

const MovieList: React.FC<Props> = ({ type, isTop, premiereFilters }) => {
  const { moviesStore, uiStore } = useRootStore();
  const params = useParams();
  const [page, setPage] = useState(1);

  const getFilmList = useCallback(() => {
    if (isTop) {
      moviesStore.getTopMovies({
        type: type === 'FILM' ? 'TOP_250_MOVIES' : 'TOP_250_TV_SHOWS',
        page,
      });
    } else if (type === 'PREMIERES' && premiereFilters) {
      moviesStore.getPremiereFilms(premiereFilters);
    } else if (type !== 'PREMIERES') {
      moviesStore.getFilms({
        type,
        genre: params.genre ? genres.find(i => i.short === params.genre)?.id : undefined,
        country: params.country ? countries.find(i => i.short === params.country)?.id : undefined,
        year: params.year ? Number(params.year) : undefined,
        page,
      });
    }
  }, [moviesStore, isTop, premiereFilters, type, params, page]);

  useEffect(() => {
    getFilmList();
  }, [getFilmList]);

  useEffect(() => () => {
    setPage(1);
  }, [type, params]);

  return (
    <>
      {
        moviesStore.filmsLoading && !moviesStore.filmList.length && (
          <Container viewmode="list">
            <SpinnerContainer><Spinner size={50} strokeWidth={2} /></SpinnerContainer>
          </Container>
        )
      }
      {
        (!!moviesStore.filmList.length) && (
          <MainContent>
            <Container viewmode={uiStore.viewMode}>
              {
                moviesStore.filmList.map(f => (uiStore.viewMode === 'list'
                  ? <MovieBigCard key={f.kId} movie={f} />
                  : <MovieSmallCard key={f.kId} movie={f} />))
              }
            </Container>
            {
              type !== 'PREMIERES' && page < moviesStore.filmTotalPages && (
                <MoreButton onClick={() => setPage(prev => prev + 1)}>Показать еще {
                  moviesStore.filmsLoading ? <Spinner strokeWidth={2} size={20} /> : <MoreIcon />
                }
                </MoreButton>
              )
            }
          </MainContent>
        )
      }

      {
        (!moviesStore.filmsLoading && !moviesStore.filmList.length)
        && (
          <Container viewmode="list">
            <EmptyFilmList>Список { type === 'TV_SERIES' ? 'сериалов' : 'фильмов' } отсуствует :(</EmptyFilmList>
          </Container>
        )
      }
    </>
  );
};

export default observer(MovieList);
