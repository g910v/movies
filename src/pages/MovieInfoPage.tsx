import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import {
  BiChevronDown, BiChevronUp, BiBookmark, BiSolidBookmark,
} from 'react-icons/bi';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useRootStore } from '../hooks';
import {
  Carousel, Spinner, RatingStars, Button,
} from '../components/styled';
import baseTheme, { textGradient } from '../styles/theme';
import { IMovieInfo } from '../stores/FilmInfoStore';
import { IActor } from '../stores/ActorsStore';
import ActorCarouselCard from '../components/ActorCarouselCard';
import Modal from '../components/styled/Modal';
import FilmSmallCard from '../components/FilmSmallCard';

const BackImg = styled.div<{ url: string }>`
  height: 100vh;
  width: 100%;
  margin-top: -5rem;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${baseTheme.colors.backimgGradient};
  z-index: -1;
`;

const GradientContainerRevert = styled.div`
  width: 100%;
  height: 100vh;
  background: ${baseTheme.colors.headerGradient};
  display: flex;
  justify-content: center;
  z-index: -1;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -5vh;
`;

const ContentContainer = styled.div`
  padding: 8rem 0 4rem 0;
  height: fit-content;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
`;

const PosterContainer = styled.div`
  width: 45vh;
  margin-right: 1rem;
  height: max-content;
`;

const Poster = styled.img`
  width: 45vh;
  margin-bottom: 1rem;
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
  margin-top: 2.5rem;
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
  width: fit-content;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

const SubTitle = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const SavedIcon = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  padding: 0.75rem 0 0 0.75rem;
  display: flex;
  align-items: start;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const SimilarMovies = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  row-gap: 1rem;
`;

const SimilarTitle = styled(SubTitle)`
  cursor: pointer;
  width: fit-content;
  display: flex;
  margin-top: 0;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

const MovieInfoPage: React.FC = () => {
  const { filmInfoStore, filmsStore, uiStore } = useRootStore();
  const params = useParams();
  const [movie, setMovie] = useState<IMovieInfo | undefined>(undefined);
  const [showDetails, setShowDetails] = useState(false);
  const [actors, setActors] = useState<IActor[]>([]);
  const [directors, setDirectors] = useState<IMovieInfo['persons']>([]);
  const [producers, setProducers] = useState<IMovieInfo['persons']>([]);
  const [writers, setWriters] = useState<IMovieInfo['persons']>([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [youtubeVisible, setYoutubeVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [showSimilar, setShowSimilar] = useState(false);

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

  useEffect(() => {
    setIsSaved(filmsStore.isSavedFilm(filmInfoStore.movieInfo?.id ?? 0));
  }, [filmInfoStore.movieInfo?.id, filmsStore]);

  useEffect(() => {
    if (movie) {
      filmsStore.changeSavedFilms({
        name: movie.name ?? '',
        enName: movie.alternativeName ?? '',
        rating: movie.rating?.kp ?? undefined,
        duration: movie.movieLength ?? undefined,
        premiereRu: movie.premiere?.russia ?? '',
        countries: movie.countries?.map(i => i.name ?? '').slice(0, 3) ?? [],
        genres: movie.genres?.map(i => i.name ?? '').slice(0, 3) ?? [],
        poster: movie.poster?.url ?? movie.poster?.previewUrl ?? '',
        year: movie.year ?? 0,
        kId: movie.id,
        saved: isSaved,
      }, isSaved);
    }
  }, [isSaved, movie, filmsStore]);

  useEffect(() => {
    uiStore.updateDocumentTitle('Актеры');
  }, [uiStore]);

  return (
    <>
      <Modal
        visible={youtubeVisible}
        setVisible={setYoutubeVisible}
      >
        <iframe
          width="100%"
          height="100%"
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Modal>
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
                    <Button label="Посмотреть трейлер" onClick={() => setYoutubeVisible(true)} />
                  </PosterContainer>
                  <InfoContainer>
                    <MainTitle>
                      <Title>{movie.name} ({movie.alternativeName}, {movie.type === 'movie' ? 'фильм' : 'сериал'})</Title>
                      <SavedIcon onClick={() => setIsSaved(prev => !prev)}>
                        {
                          isSaved ? <BiSolidBookmark /> : <BiBookmark />
                        }
                      </SavedIcon>
                    </MainTitle>
                    <Description>
                      {!!movie.rating?.kp && (<RatingStars rating={movie.rating.kp} />)}
                    </Description>
                    <Description>
                      {movie.year} г., {movie.movieLength} мин.
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
                        showDetails ? <BiChevronUp style={{ fontSize: '1.5rem', marginTop: '0.1rem' }} /> : <BiChevronDown style={{ fontSize: '1.5rem' }} />
                      }
                    </DetailsButton>
                    {
                      showDetails && (
                        <>
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
                          {

                          }
                          <Description>
                            Бюджет: {movie.budget?.value ? `${movie.budget.value} ${movie.budget?.currency}` : 'Информация отсутсвует'}
                          </Description>
                          <Description>
                            Сборы в мире: {movie.fees?.world?.value ? `${movie.fees.world.value} ${movie.fees.world?.currency}` : 'Информация отсутсвует'}
                          </Description>
                          <Description>
                            Премьера в мире: {format(new Date(movie.premiere?.world ?? ''), 'dd MMMM Y', { locale: ruLocale })}
                          </Description>
                          {
                            movie.slogan && (
                              <Description>
                                «{movie.slogan}»
                              </Description>
                            )
                          }
                        </>
                      )
                    }
                  </InfoContainer>
                  <ActorsContainer>
                    <SubTitle>Актерский состав</SubTitle>
                    {
                      actors?.length ? (
                        <Carousel>
                          {
                            actors?.map(i => (
                              <ActorCarouselCard key={i.kinopoiskId} actor={i} />
                            ))
                          }
                        </Carousel>
                      ) : (
                        <div>Информация отсутвует</div>
                      )
                    }
                  </ActorsContainer>
                  <ActorsContainer>
                    <SimilarTitle onClick={() => setShowSimilar(prev => !prev)}>
                      Похожие фильмы
                      {
                        showSimilar ? <BiChevronUp style={{ fontSize: '2.5rem', marginBottom: '-0.5rem' }} /> : <BiChevronDown style={{ fontSize: '2.5rem' }} />
                      }
                    </SimilarTitle>
                    {
                      showSimilar && (
                        <SimilarMovies>
                          {
                            movie.similarMovies?.map(i => (
                              <FilmSmallCard
                                key={i.id}
                                film={{
                                  name: i.name,
                                  enName: i.alternativeName,
                                  rating: i.rating.kp ?? undefined,
                                  poster: i.poster.previewUrl ?? '',
                                  kId: i.id ?? -1,
                                  year: i.year,
                                  countries: [],
                                  genres: [],
                                  saved: null,
                                }}
                              />
                            ))
                          }
                        </SimilarMovies>
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
