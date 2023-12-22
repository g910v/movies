import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';
import { PageContainer, Title } from '../components/styled';
import FilmBigCard from '../components/FilmBigCard';
import SelectViewButtons from '../components/SelectViewButtons';
import FilmSmallCard from '../components/FilmSmallCard';
import baseTheme from '../styles/theme';

export interface Option {
  value: string,
  label: string,
}

const ModeButtons = styled.div`
  margin-left: auto;
  padding-top: 1rem;
`;

const grid = css`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  @media ${baseTheme.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`;

const list = css`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div<{gridmode: boolean}>`
  ${props => (props.gridmode ? grid : list)};
  row-gap: 1rem;
  margin-top: 0.5rem;
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title>Сохраненное</Title>
        <ModeButtons>
          <SelectViewButtons />
        </ModeButtons>
      </div>
      <Container gridmode={uiStore.viewMode === 'grid' && !!filmsStore.savedFilms.length}>
        {
          filmsStore.savedFilms.length ? (
            filmsStore.savedFilms.map(f => (uiStore.viewMode === 'list'
              ? <FilmBigCard key={f.kId} film={f} />
              : <FilmSmallCard key={f.kId} film={f} />)))
            : (
              <EmptyMessage>Здесь будут отображаться сохранные фильмы и сериалы</EmptyMessage>
            )
        }
      </Container>
    </PageContainer>
  );
};

export default observer(SavedPage);
