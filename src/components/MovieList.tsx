import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRootStore } from '../hooks';
import FilmBigCard from './FilmBigCard';
import Spinner from './styled/Spinner';
import genres from '../shared/genres';
import countries from '../shared/countries';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
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
  margin-top: 3rem;
`;

interface Props {
  type: 'FILM' | 'TV_SERIES',
}

const MovieList: React.FC<Props> = ({ type }) => {
  const { filmsStore } = useRootStore();
  const params = useParams();

  useEffect(() => {
    const genre = genres.find(i => i.short === params.genre);
    const country = countries.find(i => i.short === params.country);
    filmsStore.getFilms({
      type,
      genre: genre?.id,
      country: country?.id,
    });
  }, [filmsStore, params, type]);

  return (
    <Container>
      {
        filmsStore.filmsLoading && <SpinnerContainer><Spinner size={50} strokeWidth={2} /></SpinnerContainer>
      }
      {
        (!filmsStore.filmsLoading && !!filmsStore.filmList.length)
        && filmsStore.filmList.map(f => <FilmBigCard key={f.kId} film={f} />)
      }
      {
        (!filmsStore.filmsLoading && !filmsStore.filmList.length)
        && <EmptyFilmList>Список { type === 'TV_SERIES' ? 'сериалов' : 'фильмов' } отсуствует :(</EmptyFilmList>
      }
    </Container>
  );
};

export default observer(MovieList);
