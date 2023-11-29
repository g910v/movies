import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useRootStore } from '../hooks';
import { Spinner } from './styled';
import ActorBigCard from './ActorBigCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.4rem;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyFilmList = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const PersonList: React.FC = () => {
  const { actorStote } = useRootStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('search');
    if (value) {
      actorStote.searchActors(value);
    }
  }, [actorStote, searchParams]);

  return (
    <Container>
      {
        actorStote.actorsLoading && <SpinnerContainer><Spinner size={50} strokeWidth={2} /></SpinnerContainer>
      }
      {
        (!actorStote.actorsLoading && !!actorStote.actorList.length)
        && actorStote.actorList.map(f => <ActorBigCard key={f.kinopoiskId} actor={f} />)
      }
      {
        (!actorStote.actorsLoading && !actorStote.actorList.length && searchParams.get('search'))
        && <EmptyFilmList>По вашему запросу ничего не найдено :(</EmptyFilmList>
      }
    </Container>
  );
};

export default observer(PersonList);
