import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import routes from '../../../shared/routes';
import { PageContainer, Title } from '../../../shared/ui';
import baseTheme from '../../../shared/styles/theme';
import { useRootStore } from '../../../shared/libs/hooks';
import { SelectViewButtons } from '../../../features';
import { MovieBigCard, MovieSmallCard } from '../../../entities';

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
  const { uiStore, moviesStore } = useRootStore();

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
      <Container gridmode={uiStore.viewMode === 'grid' && !!moviesStore.savedFilms.length}>
        {
          moviesStore.savedFilms.length ? (
            moviesStore.savedFilms.map(f => (uiStore.viewMode === 'list'
              ? <MovieBigCard key={f.kId} movie={f} />
              : <MovieSmallCard key={f.kId} movie={f} />)))
            : (
              <EmptyMessage>Здесь будут отображаться сохранные фильмы и сериалы</EmptyMessage>
            )
        }
      </Container>
    </PageContainer>
  );
};

export default observer(SavedPage);
