import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { Card } from './styled';
import baseTheme from '../styles/theme';
import { IFilm } from '../stores/FilmsStore';
import { useRootStore } from '../hooks';

const CardFixed = styled(Card)`
  width: auto;
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Image = styled(ImagePreview)<{height: string}>`
  height: ${props => props.height};
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const MoreContainer = styled(Link)<{ state: string }>`
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
  height: calc(100% - 4.5rem);
  padding: 1rem 1.5rem 3.5rem;
  color: ${baseTheme.colors.text};
  transition: all 0.15s ease-in;
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
`;

const Name = styled.div<{height: string}>`
  font-weight: 800;
  font-size: 1.15rem;
  margin-top: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: ${props => props.height};
`;

const EnName = styled.div`
  display: block;
  font-weight: 800;
  margin-bottom: 0.75rem;
  @media ${baseTheme.media.s} {
    display: none;
  }
`;

const Rating = styled.div`
  /* font-weight: 500; */
  /* font-size: 0.8rem; */
`;

const Description = styled.div`
  margin-top: 1rem;
`;

const ActiveContainer = styled(Container)`
  position: absolute;
  z-index: 10;
  top: 1rem;
  right: 1rem;
`;

const IconSelect = styled.span`
  font-size: 1.8rem;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
`;

interface IMovie extends Omit<IFilm, 'saved'> {
  saved: boolean | null,
}
interface Props {
  film: IMovie,
}

const FilmSmallCard: React.FC<Props> = memo(({ film }) => {
  const [nameVisible, setNameVisible] = useState(false);
  const { filmsStore } = useRootStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Container
      onMouseEnter={() => setNameVisible(true)}
      onMouseLeave={() => setNameVisible(false)}
    >
      <CardFixed>
        <Image
          src={film.poster}
          alt={film.name ?? ''}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          height={isLoading ? '0px' : '100%'}
        />
        {
          isLoading && !isError && (
          <ImagePreview
            src={film.posterPreview}
            alt={film.name ?? ''}
          />
          )
        }
        <ActiveContainer>
          {
            film.saved !== null && (
              <IconSelect onClick={() => filmsStore.changeSavedFilms(film as IFilm, !film.saved)}>
                {
                  film.saved ? (<BiSolidBookmark />) : (<BiBookmark />)
                }
              </IconSelect>
            )
          }
        </ActiveContainer>
        <Transition in={!isLoading && nameVisible} timeout={150} mountOnEnter unmountOnExit>
          {
            state => (
              <MoreContainer to={`/movie/${film.kId}`} state={state}>
                {film.enName ? (<EnName>{film.enName}</EnName>) : (<EnName>{film.name}</EnName>)}
                {film.rating && (<Rating>Рейтинг: {film.rating?.toFixed(1)}</Rating>)}
                <Rating>{film.year && (<>{film.year} г.</>)}{film.duration && (<>, {film.duration} мин.</>)}</Rating>
                {
                  film.premiereRu && (<Rating>Премьера в России: {format(new Date(film.premiereRu ?? ''), 'dd.MM.Y')}</Rating>)
                }
                {
                  !!film.countries.length && !!film.genres.length && (
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
                  )
                }
              </MoreContainer>
            )
          }
        </Transition>
        <Name height={isLoading ? '3rem' : 'auto'}>{film.name}</Name>
      </CardFixed>
    </Container>
  );
});

export default FilmSmallCard;
