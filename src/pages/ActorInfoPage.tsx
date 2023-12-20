import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Link,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { BiChevronsDown } from 'react-icons/bi';
import { useRootStore } from '../hooks';
import { Card, Spinner } from '../components/styled';
import baseTheme, { textGradient } from '../styles/theme';
import { IActorInfo } from '../stores/ActorInfoStore';
import BackButton from '../components/BackButton';

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -5vh;
`;

const ContentContainer = styled.div`
  padding: 3rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
`;

const PosterContainer = styled.div`
  width: 40vh;
  margin-right: 1rem;
  height: max-content;
`;

const Poster = styled.img`
  width: 40vh;
  margin-bottom: 1rem;
`;

const InfoContainer = styled.div`
  width: calc(100% - 40vh - 1rem);
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
  margin-bottom: 1rem;
`;

const Description = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
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
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${baseTheme.colors.yellow};
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

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

const SavedIcon = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
`;

const ActorInfoPage: React.FC = () => {
  const { actorInfoStore, uiStore } = useRootStore();
  const params = useParams();
  const [filmList, setFilmList] = useState<IActorInfo['movies']>([]);

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
          <PosterContainer>
            <Poster
              src={actorInfoStore.actorInfo.photo ?? ''}
              alt=""
            />
          </PosterContainer>
          <InfoContainer>
            <SavedIcon>
              <Title>{actorInfoStore.actorInfo.name} {actorInfoStore.actorInfo.enName && <>({actorInfoStore.actorInfo.enName})</>}
              </Title>
              <BackButtonContainer>
                <BackButton />
              </BackButtonContainer>
            </SavedIcon>
            <Description>
              Пол: {actorInfoStore.actorInfo.sex}
            </Description>
            <Description>
              Возраст: {actorInfoStore.actorInfo.age}
            </Description>
            <Description>
              Дата рождения: {format(new Date(actorInfoStore.actorInfo.birthday ?? ''), 'dd MMMM Y', { locale: ruLocale })}
            </Description>
            {
              actorInfoStore.actorInfo.birthPlace?.length && (
                <Description>
                  Место рождения: {actorInfoStore.actorInfo.birthPlace?.map((i, index, arr) => {
                  const comma = index === arr.length - 1 ? '' : ', ';
                  return i.value + comma;
                })}
                </Description>
              )
            }
            <Description>
              Рост: {actorInfoStore.actorInfo.growth}
            </Description>
            <Description>
              Количество наград: {actorInfoStore.actorInfo.countAwards ?? 0}
            </Description>
            <Description>
              Карьера: {actorInfoStore.actorInfo.profession?.map((i, index, arr) => {
              const comma = index === arr.length - 1 ? '' : ', ';
              return i.value + comma;
            })}
            </Description>
            <Description>
              Количество фильмов: {actorInfoStore.actorInfo.movies?.length ?? 0}
            </Description>
            {
              actorInfoStore.actorInfo.death && (
                <Description>
                  Дата смерти: {format(new Date(actorInfoStore.actorInfo?.death ?? ''), 'dd MMMM Y', { locale: ruLocale })}
                </Description>
              )
            }
            {
              !!actorInfoStore.actorInfo.deathPlace?.length && (
                <Description>
                  Место смерти: {actorInfoStore.actorInfo.deathPlace?.map((i, index, arr) => {
                  const comma = index === arr.length - 1 ? '' : ', ';
                  return i.value + comma;
                })}
                </Description>
              )
            }
          </InfoContainer>
          <ActorsContainer>
            <SubTitle>
              Фильмы c {actorInfoStore.actorInfo.sex === 'Мужской' ? 'его' : 'её'} участием
            </SubTitle>
            <Movies>
              {
                filmList?.map(i => (
                  <MovieCard to={`/movie/${i.id}`}>
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
          </ActorsContainer>
        </ContentContainer>
        )
      }
    </>
  );
};

export default observer(ActorInfoPage);
