import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { BiChevronLeft, BiChevronsDown } from 'react-icons/bi';
import baseTheme, { textGradient } from '../../../shared/styles/theme';
import { useRootStore } from '../../../shared/libs/hooks';
import { Card, Spinner } from '../../../shared/ui';
import { TActorInfo } from '../../../entities';
import { ActorInfo } from '../../../widgets';

const SpinnerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  padding: 1.5rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  max-width: 1700px;
  @media ${baseTheme.media.l} {
    width: 95%;
  }
  @media ${baseTheme.media.m} {
    justify-content: center;
  }
`;

const PosterContainer = styled.div<{poster: boolean}>`
  width: ${props => (props.poster ? '40vh' : '0px')};
  margin-right: 1rem;
  height: max-content;
  @media ${baseTheme.media.l} {
    width: ${props => (props.poster ? '35vh' : '0px')};
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

const Poster = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

const MoviesContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const MovieCard = styled(Link)`
  width: calc(100% - 2rem);
  color: ${baseTheme.colors.text};
  cursor: pointer;
`;

const MovieContent = styled.div`
  display: flex;
  row-gap: 0.25rem;
  flex-direction: column;
`;

const MovieTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const RatingMovie = styled.div`
  display: flex;
  margin-left: auto;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${baseTheme.colors.yellow};
  @media ${baseTheme.media.m} {
    padding: 0 0.25rem;
  }
`;

const ProfessionMovie = styled.div`
  color: ${baseTheme.colors.textSecondary};
`;

const MoreButton = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

const MoreIcon = styled(BiChevronsDown)`
  font-size: 1.5rem;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  width: fit-content;
  cursor: pointer;
  &:hover{
    color: ${baseTheme.colors.yellow};
    ${textGradient}
  }
`;

const BackButtonContainer = styled.div`
  max-width: 1700px;
  padding: 0 1rem;
  width: calc(100% - 2rem);
`;

const BackIcon = styled(BiChevronLeft)`
  font-size: 1.25rem;
  margin-top: 0.15rem;
`;

const ActorInfoPage: React.FC = () => {
  const { actorInfoStore, uiStore } = useRootStore();
  const params = useParams();
  const [filmList, setFilmList] = useState<TActorInfo['movies']>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.personId) {
      actorInfoStore.getActor(params.personId);
    }
  }, [actorInfoStore, params]);

  useEffect(() => {
    uiStore.updateDocumentTitle('Актеры');
  }, [uiStore]);

  useEffect(() => {
    if (actorInfoStore.actorInfo?.movies) {
      setFilmList(actorInfoStore.actorInfo.movies.slice(0, 5));
    }
  }, [actorInfoStore.actorInfo]);

  return (
    <>
      <BackButtonContainer onClick={() => navigate(-1)}>
        <BackButton>
          <BackIcon />
          назад
        </BackButton>
      </BackButtonContainer>
      {
        actorInfoStore.actorInfoLoading && (
          <SpinnerContainer>
            <Spinner size={50} strokeWidth={2} />
          </SpinnerContainer>
        )
      }
      {
        !actorInfoStore.actorInfoLoading && actorInfoStore.actorInfo && (
        <ContentContainer>
          <PosterContainer poster={!!actorInfoStore.actorInfo.photo}>
            <Poster
              src={actorInfoStore.actorInfo.photo ?? ''}
              alt=""
            />
          </PosterContainer>
          <ActorInfo actor={actorInfoStore.actorInfo} />
          <MoviesContainer>
            <SubTitle>
              Фильмы c {actorInfoStore.actorInfo.sex === 'Мужской' ? 'его' : 'её'} участием
            </SubTitle>
            <Movies>
              {
                filmList?.map(i => (
                  <MovieCard key={i.id} to={`/movie/${i.id}`}>
                    <Card>
                      <MovieContent>
                        <MovieTitle>{i.name}</MovieTitle>
                        {
                          i.name ? (<div>{i.alternativeName}</div>) : (<MovieTitle>{i.alternativeName}</MovieTitle>)
                        }
                        <ProfessionMovie>{i.description && (
                          <>
                            Роль: {i.description === 'Self' ? 'играет самого себя' : i.description}
                          </>
                        )}
                        </ProfessionMovie>
                      </MovieContent>
                      <RatingMovie>
                        <div>{i.rating?.toFixed(1)}</div>
                      </RatingMovie>
                    </Card>
                  </MovieCard>
                ))
              }
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                  actorInfoStore.actorInfo.movies?.length && actorInfoStore.actorInfo.movies.length > 5 && filmList?.length === 5 && (
                    <MoreButton onClick={() => setFilmList(actorInfoStore.actorInfo?.movies)}>
                      Показать полный список фильмов <MoreIcon />
                    </MoreButton>
                  )
                }
              </div>
            </Movies>
          </MoviesContainer>
        </ContentContainer>
        )
      }
    </>
  );
};

export default observer(ActorInfoPage);
