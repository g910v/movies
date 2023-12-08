import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';
import { PageContainer, Title } from '../components/styled';
import FilmBigCard from '../components/FilmBigCard';

export interface Option {
  value: string,
  label: string,
}

const Container = styled.div`
  margin: 1.4rem 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`;

const EmptyMessage = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const SavedPage: React.FC = () => {
  const { uiStore, filmsStore } = useRootStore();

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.SAVED.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <Title>Сохраненное</Title>
      <Container>
        {
          filmsStore.savedFilms.length ? (
            filmsStore.savedFilms.map(i => <FilmBigCard key={i.kId} film={i} />)
          ) : (
            <EmptyMessage>Здесь будут отображаться сохранные фильмы и сериалы</EmptyMessage>
          )
        }
      </Container>
    </PageContainer>
  );
};

export default observer(SavedPage);
