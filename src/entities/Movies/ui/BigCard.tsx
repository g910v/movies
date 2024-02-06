import React from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { IMovie } from '../types/movieList';
import baseTheme from '../../../shared/styles/theme';
import { Card, SimpleButton } from '../../../shared/ui';
import { useRootStore } from '../../../shared/libs/hooks';

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
  movie: IMovie,
}

const BigCard: React.FC<Props> = ({ movie }) => {
  const { moviesStore } = useRootStore();

  return (
    <Card>
      <InfoContainer to={`/movie/${movie.kId}`}>
        <Image
          src={movie.posterPreview}
          alt={movie.name}
        />
        <TextContainer>
          <FilmName>{movie.name}</FilmName>
          <div>
            <div>{
            movie.enName && (<>{movie.enName}, </>)
} {movie.duration && (<>{movie.duration} мин., </>)} {movie.year && (<>{movie.year} г.</>)}
            </div>
            {
            movie.rating && (<div>Рейтинг: {movie.rating}</div>)
          }
            {
            movie.premiereRu && (<div>Премьера в России: {format(new Date(movie.premiereRu ?? ''), 'dd.MM.Y')}</div>)
          }
          </div>
          <div>
            <Description>
              {
              movie.countries.map((f, index, arr) => {
                const comma = index === arr.length - 1 ? '' : ', ';
                return f + comma;
              })
            } • {
              movie.genres.map((f, index, arr) => {
                const comma = index === arr.length - 1 ? '' : ', ';
                return f + comma;
              })
            }
            </Description>
          </div>
        </TextContainer>
      </InfoContainer>
      <IconSelect
        icon={movie.saved ? (<BiSolidBookmark />) : (<BiBookmark />)}
        onClick={() => moviesStore.changeSavedFilms(movie, !movie.saved)}
      />
    </Card>
  );
};

export default observer(BigCard);
