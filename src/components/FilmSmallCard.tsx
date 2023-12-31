import React, { useState } from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';
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
  margin-bottom: 0.75rem;
`;

const Image = styled(ImagePreview)<{height: string}>`
  height: ${props => props.height};
  width: 100%;
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
  margin-top: auto;
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
  font-weight: 800;
  font-size: 1.2rem;
  margin-right: auto;
  height: fit-content;
  padding: 0 0.4rem;
  margin-top: 0.1rem;
  border-radius: 5px;
  color: ${baseTheme.colors.yellow};
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(60px);
`;

const Description = styled.div`
  margin-top: 1rem;
`;

const ActiveContainer = styled(Container)`
  position: absolute;
  z-index: 9;
  top: 1rem;
  right: 1rem;
  display: flex;
  width: calc(100% - 2.1rem);
  align-items: start;
`;

const IconSelect = styled.span`
  font-size: 1.8rem;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
  height: fit-content;
`;

interface IMovie extends Omit<IFilm, 'saved'> {
  saved: boolean | null,
}
interface Props {
  film: IMovie,
}

const FilmSmallCard: React.FC<Props> = ({ film }) => {
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
        {
          !isError && (
            <Image
              src={film.poster}
              alt={film.name ?? ''}
              onLoad={() => setIsLoading(false)}
              onError={() => { setIsError(true); setIsLoading(false); }}
              height={isLoading ? '0px' : '100%'}
            />
          )
        }
        {
          (isLoading || isError) && (
            <ImagePreview
              src={film.posterPreview}
              alt={film.name ?? ''}
            />
          )
        }
        <ActiveContainer>
          <Rating>{film.rating && film.rating?.toFixed(1)}</Rating>
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
                <div>{film.year && (<>{film.year} г.</>)}{film.duration && (<>, {film.duration} мин.</>)}</div>
                {
                  film.premiereRu && (<div>Премьера в России: {format(new Date(film.premiereRu ?? ''), 'dd.MM.Y')}</div>)
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
};

export default observer(FilmSmallCard);
