import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useRootStore } from '../hooks';
import { Carousel, Spinner, RatingStars } from '../components/styled';
import baseTheme from '../styles/theme';
import { IMovieInfo } from '../stores/FilmInfoStore';
import YoutubeIcon from '../assets/icons/YoutubeIcon.svg?react';
import { IActor } from '../stores/ActorsStore';
import ActorSmallCard from '../components/ActorSmallCard';

const BackImg = styled.div<{ url: string }>`
  height: 100%;
  width: 100%;
  margin-top: -5rem;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  margin-bottom: 5rem;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${baseTheme.colors.backimgGradient};
`;

const GradientContainerRevert = styled.div`
  width: 100%;
  height: 100%;
  background: ${baseTheme.colors.headerGradient};
  display: flex;
  justify-content: center;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -5vh;
`;

const ContentContainer = styled.div`
  padding-top: 6rem;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
`;

const PosterContainer = styled.div`
  width: 45vh;
  margin-right: 1rem;
  height: max-content;
`;

const Poster = styled.img`
  width: 45vh;
`;

const InfoContainer = styled.div`
  width: calc(100% - 45vh - 1rem);
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
`;

const ActorsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
`;

const Description = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const DetailsButton = styled.div`
  display: flex;
  color: ${baseTheme.colors.text};
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix}
  }
`;

const SubTitle = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const YoutubeImg = styled.div<{ url: string }>`
  margin-top: 1rem;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 25vh;
`;

const YoutubeIconContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YoutubeIconStyled = styled(YoutubeIcon)`
  height: 6rem;
  cursor: pointer;
  &:hover {
    height: 7rem;
  }
`;

const MovieInfoPage: React.FC = () => {
  const { filmInfoStore } = useRootStore();
  const params = useParams();
  const [movie, setMovie] = useState<IMovieInfo | undefined>(undefined);
  const [showDetails, setShowDetails] = useState(false);
  const [actors, setActors] = useState<IActor[]>([]);
  const [directors, setDirectors] = useState<IMovieInfo['persons']>([]);
  const [producers, setProducers] = useState<IMovieInfo['persons']>([]);
  const [writers, setWriters] = useState<IMovieInfo['persons']>([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  useEffect(() => {
    if (params.movieId) {
      filmInfoStore.getMovie(params.movieId);
    }
  }, [filmInfoStore, params]);

  useEffect(() => {
    setMovie(filmInfoStore.movieInfo);
    setActors(filmInfoStore.movieInfo?.persons?.filter(i => i.enProfession === 'actor').map(i => ({
      kinopoiskId: i.id ?? undefined,
      webUrl: '',
      nameRu: i.name,
      nameEn: i.enName,
      posterUrl: i.photo ?? '',
      sex: 'Информация отсутсвует',
    })) ?? []);
    setDirectors(filmInfoStore.movieInfo?.persons?.filter(i => i.enProfession === 'director'));
    setProducers(filmInfoStore.movieInfo?.persons?.filter(i => i.enProfession === 'producer'));
    setWriters(filmInfoStore.movieInfo?.persons?.filter(i => i.enProfession === 'writer'));
    setYoutubeUrl(filmInfoStore.movieInfo?.videos?.trailers?.find(i => i.site === 'youtube')?.url ?? '');
  }, [filmInfoStore.movieInfo]);

  return (
    <>
      {
        filmInfoStore.movieInfoLoading && (
          <SpinnerContainer>
            <Spinner size={50} strokeWidth={2} />
          </SpinnerContainer>
        )
      }
      {
        !filmInfoStore.movieInfoLoading && movie && (
          <BackImg url={movie.backdrop?.url ?? ''}>
            <GradientContainer>
              <GradientContainerRevert>
                <ContentContainer>
                  <PosterContainer>
                    <Poster
                      src={movie.poster?.url ?? ''}
                      alt={movie.enName ?? ''}
                    />
                    {/* <YoutubeImg url={movie.backdrop?.previewUrl ?? ''}>
                      <YoutubeIconContainer>
                        <YoutubeIconStyled />
                      </YoutubeIconContainer>
                    </YoutubeImg> */}
                    {/* <iframe
                      width="100%"
                      src={youtubeUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    /> */}
                  </PosterContainer>
                  <InfoContainer>
                    <Title>{movie.name} ({movie.alternativeName}, {movie.type === 'movie' ? 'фильм' : 'сериал'})</Title>
                    <Description>
                      {!!movie.rating?.kp && (<RatingStars rating={movie.rating.kp} />)}
                    </Description>
                    <Description>
                      {movie.year}, {movie.movieLength} мин.
                    </Description>
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
                        showDetails ? <BiChevronUp style={{ fontSize: '1.5rem' }} /> : <BiChevronDown style={{ fontSize: '1.5rem' }} />
                      }
                    </DetailsButton>
                    {
                      showDetails && (
                        <>
                          <Description>
                            Режиссер: {
                              directors?.map((f, index, arr) => {
                                const comma = index === arr.length - 1 ? '' : ', ';
                                return f.name + comma;
                              })
                            }
                          </Description>
                          <Description>
                            Сценарист: {
                              writers?.map((f, index, arr) => {
                                const comma = index === arr.length - 1 ? '' : ', ';
                                return f.name + comma;
                              })
                            }
                          </Description>
                          <Description>
                            Продюсер: {
                              producers?.map((f, index, arr) => {
                                const comma = index === arr.length - 1 ? '' : ', ';
                                return f.name + comma;
                              })
                            }
                          </Description>
                          <Description>
                            Бюджет: {movie.budget?.value} {movie.budget?.currency}
                          </Description>
                          <Description>
                            Сборы в мире: {movie.fees?.world?.value} {movie.fees?.world?.currency}
                          </Description>
                          <Description>
                            Премьера в мире: {format(new Date(movie.premiere?.world ?? ''), 'dd MMMM Y', { locale: ruLocale })}
                          </Description>
                          <Description>
                            «{movie.slogan}»
                          </Description>
                        </>
                      )
                    }
                  </InfoContainer>
                  <ActorsContainer>
                    <SubTitle>Актерский состав</SubTitle>
                    {
                      actors?.length && (
                        <Carousel>
                            {
                              actors?.map(i => (
                                <ActorSmallCard actor={i} />
                              ))
                            }
                        </Carousel>
                      )
                    }
                  </ActorsContainer>
                </ContentContainer>
              </GradientContainerRevert>
            </GradientContainer>
          </BackImg>
        )
      }
    </>
  );
};

export default observer(MovieInfoPage);
