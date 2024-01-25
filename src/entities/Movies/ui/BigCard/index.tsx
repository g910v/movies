import React from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Card, SimpleButton } from './styled';
import baseTheme from '../styles/theme';
import { IFilm } from '../stores/FilmsStore';
import { useRootStore } from '../hooks';

const Image = styled.img`
  height: 11rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.55rem;
  justify-content: center;
  height: 11rem;
`;

const InfoContainer = styled(Link)`
  display: flex;
  width: 95%;
  color: ${baseTheme.colors.text};
`;

const TextContainer = styled(Container)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const IconSelect = styled(SimpleButton)`
  font-size: 1.8rem;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
`;

const FilmName = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.9rem;
  cursor: pointer;
`;

const Description = styled.div`
  color: ${baseTheme.colors.textSecondary};
`;

interface Props {
  film: IFilm,
}

const FilmBigCard: React.FC<Props> = ({ film }) => {
  const { filmsStore } = useRootStore();

  return (
    <Card>
      <InfoContainer to={`/movie/${film.kId}`}>
        <Image
          src={film.posterPreview}
          alt={film.name}
        />
        <TextContainer>
          <FilmName>{film.name}</FilmName>
          <div>
            <div>{film.enName && (<>{film.enName}, </>)} {film.duration && (<>{film.duration} мин., </>)} {film.year && (<>{film.year} г.</>)}</div>
            {
            film.rating && (<div>Рейтинг: {film.rating}</div>)
          }
            {
            film.premiereRu && (<div>Премьера в России: {format(new Date(film.premiereRu ?? ''), 'dd.MM.Y')}</div>)
          }
          </div>
          <div>
            <Description>
              {
              film.countries.map((f, index, arr) => {
                const comma = index === arr.length - 1 ? '' : ', ';
                return f + comma;
              })
            } • {
              film.genres.map((f, index, arr) => {
                const comma = index === arr.length - 1 ? '' : ', ';
                return f + comma;
              })
            }
            </Description>
          </div>
        </TextContainer>
      </InfoContainer>
      <IconSelect
        icon={film.saved ? (<BiSolidBookmark />) : (<BiBookmark />)}
        onClick={() => filmsStore.changeSavedFilms(film, !film.saved)}
      />
    </Card>
  );
};

export default observer(FilmBigCard);
