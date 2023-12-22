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
  Carousel, Spinner, RatingStars, Button, SimpleButton,
} from '../components/styled';
import baseTheme, { textGradient } from '../styles/theme';
import { IMovieInfo } from '../stores/FilmInfoStore';
import { IActor } from '../stores/ActorsStore';
import ActorCarouselCard from '../components/ActorCarouselCard';
import Modal from '../components/styled/Modal';
import FilmSmallCard from '../components/FilmSmallCard';
import BackButton from '../components/BackButton';

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
  @media ${baseTheme.media.l} {
    width: 95%;
  }
  @media ${baseTheme.media.m} {
    justify-content: center;
  }
`;

const PosterContainer = styled.div`
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SavedBackIcons = styled.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  column-gap: 0.5rem;
  @media ${baseTheme.media.m} {
    justify-content: center;
  }
`;

const Poster = styled.img<{poster: boolean}>`
  width: ${props => (props.poster ? '45vh' : '0px')};
  @media ${baseTheme.media.l} {
    width: ${props => (props.poster ? '37vh' : '0px')};
  }
  @media ${baseTheme.media.m} {
    width: ${props => (props.poster ? '50%' : '0px')};
    margin-right: 0;
  }
  @media ${baseTheme.media.s} {
    width: ${props => (props.poster ? '70%' : '0px')};
    margin-right: 0;
  }
`;

const InfoContainer = styled.div<{poster: boolean}>`
  width: ${props => (props.poster ? 'calc(100% - 45vh - 1rem)' : '100%')};
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
  @media ${baseTheme.media.l} {
    width: ${props => (props.poster ? 'calc(100% - 37vh - 1rem)' : '100%')};
  }
  @media ${baseTheme.media.m} {
    width: 100%;
    align-items: center;
  }
`;

const ActorsContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
  @media ${baseTheme.media.l} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;

const Description = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  @media ${baseTheme.media.m} {
    text-align: center;
  }
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

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${baseTheme.media.m} {
    align-items: center;
  }
`;

const SimilarMovies = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  row-gap: 1rem;
  @media ${baseTheme.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
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
        posterPreview: movie.poster?.previewUrl ?? '',
      }, isSaved);
    }
  }, [isSaved, movie, filmsStore]);

  useEffect(() => {
    uiStore.updateDocumentTitle('Фильмы и сериалы');
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
                      poster={!!movie.poster?.url}
                      src={movie.poster?.url ?? ''}
                      alt={movie.enName ?? ''}
                    />
                    <SavedBackIcons>
                      <BackButton />
                      {
                        isSaved
                          ? <SimpleButton onClick={() => setIsSaved(prev => !prev)} icon={<BiSolidBookmark style={{ fontSize: '1.7rem', color: baseTheme.colors.yellow }} />} />
                          : <SimpleButton onClick={() => setIsSaved(prev => !prev)} icon={<BiBookmark style={{ fontSize: '1.7rem', color: baseTheme.colors.yellow }} />} />
                      }
                      {
                        youtubeUrl && <Button label="Посмотреть трейлер" onClick={() => setYoutubeVisible(true)} />
                      }
                    </SavedBackIcons>
                  </PosterContainer>
                  <InfoContainer poster={!!movie.poster?.url}>
                    <MainTitle>
                      <Title>{movie.name}</Title>
                      <Title>({movie.alternativeName && <>{movie.alternativeName}, </> }{movie.type === 'movie' ? 'фильм' : 'сериал'})</Title>
                    </MainTitle>
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
                        showSimilar ? <BiChevronDown style={{ fontSize: '2.5rem' }} /> : <BiChevronUp style={{ fontSize: '2.5rem', marginBottom: '-0.5rem' }} />
                      }
                    </SimilarTitle>
                    {
                      showSimilar && (
                        movie.similarMovies?.length ? (
                          <SimilarMovies>
                            {
                            movie.similarMovies?.map(i => (
                              <FilmSmallCard
                                key={i.id}
                                film={{
                                  name: i.name,
                                  enName: i.alternativeName,
                                  rating: i.rating?.kp ?? undefined,
                                  poster: i.poster?.url ?? '',
                                  posterPreview: i.poster?.previewUrl ?? '',
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
                        ) : <>Список фильмов и сериалов отсуствует</>
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
