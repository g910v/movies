import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import {
  Carousel, Spinner, Button, SimpleButton, Modal, SubTitle,
} from '../../../shared/ui';
import baseTheme from '../../../shared/styles/theme';
import { useRootStore } from '../../../shared/libs/hooks';
import {
  ActorCarouselCard, IActor,
} from '../../../entities';
import { BackButton } from '../../../features';
import MovieInfo from '../../../widgets/MovieInfo/ui';
import { SimilarMovies } from '../../../widgets';

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
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  padding: 8rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  max-width: 1700px;
  @media ${baseTheme.media.xl} {
    width: 85%;
  }
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

const ActorsContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const MovieInfoPage: React.FC = () => {
  const { movieInfoStore, moviesStore, uiStore } = useRootStore();
  const params = useParams();

  const [youtubeVisible, setYoutubeVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(true);

  const movie = useMemo(() => movieInfoStore.movieInfo, [movieInfoStore.movieInfo]);
  const actors = useMemo<IActor[]>(() => movieInfoStore.movieInfo?.persons?.filter(i => i.enProfession === 'actor').map(i => ({
    kinopoiskId: i.id ?? undefined,
    webUrl: '',
    nameRu: i.name,
    nameEn: i.enName,
    posterUrl: i.photo ?? '',
    sex: 'Информация отсутсвует',
  })) ?? [], [movieInfoStore.movieInfo]);
  const youtubeUrl = useMemo(() => movieInfoStore.movieInfo?.videos?.trailers?.find(i => i.site === 'youtube')?.url ?? '', [movieInfoStore.movieInfo]);

  useEffect(() => {
    if (params.movieId) {
      movieInfoStore.getMovie(params.movieId);
    }
  }, [movieInfoStore, params]);

  useEffect(() => {
    setIsSaved(moviesStore.isSavedFilm(movieInfoStore.movieInfo?.id ?? 0));
  }, [movieInfoStore.movieInfo?.id, moviesStore]);

  const saveFilm = () => {
    if (movie) {
      moviesStore.changeSavedFilms({
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
        saved: !isSaved,
        posterPreview: movie.poster?.previewUrl ?? '',
      }, !isSaved);
      setIsSaved(prev => !prev);
    }
  };

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
        movieInfoStore.movieInfoLoading && (
          <SpinnerContainer>
            <Spinner size={50} strokeWidth={2} />
          </SpinnerContainer>
        )
      }
      {
        !movieInfoStore.movieInfoLoading && movie && (
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
                      <SimpleButton
                        onClick={saveFilm}
                        icon={
                          isSaved
                            ? <BiSolidBookmark style={{ fontSize: '1.7rem', color: baseTheme.colors.yellow }} />
                            : <BiBookmark style={{ fontSize: '1.7rem', color: baseTheme.colors.yellow }} />
                        }
                      />
                      {
                        youtubeUrl && <Button label="Посмотреть трейлер" onClick={() => setYoutubeVisible(true)} />
                      }
                    </SavedBackIcons>
                  </PosterContainer>
                  <MovieInfo movie={movie} />
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
                  {
                    !!movie.similarMovies?.length && (
                      <SimilarMovies similarMovies={movie.similarMovies} />
                    )
                  }
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
