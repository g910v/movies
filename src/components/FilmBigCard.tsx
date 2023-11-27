import React from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import Card from './styled/Card';
import baseTheme from '../styles/theme';
import { IFilm } from '../stores/FilmsStore';
import { useRootStore } from '../hooks';

const Image = styled.img`
  width: 7rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.55rem;
  justify-content: center;
  height: 10rem;
`;

const TextContainer = styled(Container)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ActiveContainer = styled(Container)`
  margin-left: auto;
  align-items: end;
  justify-content: start;

`;

const IconSelect = styled.span`
  font-size: 1.8rem;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
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
      <Image src={film.poster} alt={film.name} />
      <TextContainer>
        <FilmName>{film.name}</FilmName>
        <div>
          <div>{film.enName && (<>{film.enName}, </>)} {film.duration && (<>{film.duration} мин.,</>)} {film.year && (<>{film.year} г.</>)}</div>
          {
            film.rating && (<div>Рейтинг: {film.rating}</div>)
          }
          {
            film.premiereRu && (<div>Премьера в России: {film.premiereRu}</div>)
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
      <ActiveContainer>
        <IconSelect onClick={() => filmsStore.changeSavedFilms(film, !film.saved)}>
          {
            film.saved ? (<BiSolidBookmark />) : (<BiBookmark />)
          }
        </IconSelect>
      </ActiveContainer>
    </Card>
  );
};

export default observer(FilmBigCard);
