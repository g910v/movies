import { format } from 'date-fns';
import React, { memo, useEffect, useState } from 'react';
import ruLocale from 'date-fns/locale/ru';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Transition } from 'react-transition-group';
import { TitleInfoPage } from '../../../features';
import { Description, InfoContainer, RatingStars } from '../../../shared/ui';
import { TMovieInfo } from '../../../entities';
import baseTheme, { textGradient } from '../../../shared/styles/theme';

const DetailsButton = styled.div`
  display: flex;
  color: ${baseTheme.colors.text};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

const DetailsBlock = styled.div<{ state: string }>`
  transform: translateY(${props => (props.state === 'exiting' || props.state === 'exited' ? '-15px' : '0px')});
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  width: 100%;
  @media ${baseTheme.media.m} {
    align-items: center;
  }
`;

interface Props {
  movie: TMovieInfo,
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [directors, setDirectors] = useState<TMovieInfo['persons']>([]);
  const [producers, setProducers] = useState<TMovieInfo['persons']>([]);
  const [writers, setWriters] = useState<TMovieInfo['persons']>([]);

  useEffect(() => {
    movie.persons?.forEach(person => {
      switch (person.enProfession) {
        case 'director':
          setDirectors(prev => [...prev ?? [], person]);
          break;
        case 'producer':
          setProducers(prev => [...prev ?? [], person]);
          break;
        case 'writer':
          setWriters(prev => [...prev ?? [], person]);
          break;
        default:
          break;
      }
    });
  }, [movie]);

  return (
    <InfoContainer poster={!!movie.poster?.url}>
      <TitleInfoPage
        name={movie.name ?? ''}
        enName={movie.alternativeName}
        movieType={movie.type}
      />
      <Description>
        {!!movie.rating?.kp && (<RatingStars rating={movie.rating.kp} />)}
      </Description>
      {
        movie.year && movie.movieLength && (
          <Description>
            {movie.year && <>{movie.year} г., </>}{movie.movieLength && <>{movie.movieLength} мин.</>}
          </Description>
        )
      }
      <Description>
        Жанр: {
                movie.genres?.map((f, index, arr) => {
                  const comma = index === arr.length - 1 ? '' : ', ';
                  return f.name + comma;
                })
              }
      </Description>
      <Description>
        Страна: {
                  movie.countries?.map((f, index, arr) => {
                    const comma = index === arr.length - 1 ? '' : ', ';
                    return f.name + comma;
                  })
                }
      </Description>
      <Description>
        {movie.description}
      </Description>
      <DetailsButton onClick={() => setShowDetails(prev => !prev)}>
        Детали о {movie.type === 'movie' ? 'фильме' : 'сериале'}
        {
          showDetails ? <BiChevronDown style={{ fontSize: '1.5rem' }} /> : <BiChevronUp style={{ fontSize: '1.5rem', marginTop: '0.1rem' }} />
        }
      </DetailsButton>
      <Transition in={showDetails} timeout={150} mountOnEnter unmountOnExit>
        {
          state => (
            <DetailsBlock state={state}>
              {
              !!directors?.length && (
                <Description>
                  Режиссер: {
                    directors?.map((f, index, arr) => {
                      const comma = index === arr.length - 1 ? '' : ', ';
                      return f.name + comma;
                    })
                  }
                </Description>
              )
            }
              {
              !!writers?.length && (
                <Description>
                  Сценарист: {
                    writers?.map((f, index, arr) => {
                      const comma = index === arr.length - 1 ? '' : ', ';
                      return f.name + comma;
                    })
                  }
                </Description>
              )
            }
              {
              !!producers?.length && (
                <Description>
                  Продюсер: {
                    producers?.map((f, index, arr) => {
                      const comma = index === arr.length - 1 ? '' : ', ';
                      return f.name + comma;
                    })
                  }
                </Description>
              )
            }
              <Description>
                Бюджет: {movie.budget?.value ? `${movie.budget.value} ${movie.budget?.currency}` : 'Информация отсутсвует'}
              </Description>
              <Description>
                Сборы: {movie.fees?.world?.value ? `${movie.fees.world.value} ${movie.fees.world?.currency}` : 'Информация отсутсвует'}
              </Description>
              {
              movie.premiere?.world && (
                <Description>
                  Премьера в мире: {format(new Date(movie.premiere?.world ?? ''), 'dd MMMM Y', { locale: ruLocale })}
                </Description>
              )
            }
              {
              movie.slogan && (
                <Description>
                  «{movie.slogan}»
                </Description>
              )
            }
            </DetailsBlock>
          )
        }
      </Transition>
    </InfoContainer>
  );
};

export default memo(MovieInfo);
