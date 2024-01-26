import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  Outlet, useLocation, useParams,
} from 'react-router-dom';
import { useRootStore } from '../../hooks';
import {
  PageContainer, Title, SelectButtons,
} from '../components/styled';
import SelectViewButtons from '../components/SelectViewButtons';
import BackButton from '../components/BackButton';

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.7rem 0;
  height: 3rem;
`;

const ModeBackButtons = styled.div`
  margin-left: auto;
  display: flex;
  column-gap: 0.5rem;
  margin-top: -0.25rem;
`;

interface Props {
  pageName: string,
}

const MoviesPage: React.FC<Props> = ({ pageName }) => {
  const { uiStore } = useRootStore();
  const params = useParams();
  const location = useLocation();
  const items = useRef([
    {
      label: 'Топ',
      short: 'top',
      key: 1,
    },
    {
      label: 'Жанры',
      short: 'genres',
      key: 2,
    },
    {
      label: 'Годы',
      short: 'years',
      key: 3,
    },
    {
      label: 'Страны',
      short: 'countries',
      key: 4,
    },
  ]);

  useEffect(() => {
    uiStore.updateDocumentTitle(pageName);
  }, [uiStore, pageName, location]);

  return (
    <PageContainer>
      <Title>{pageName}</Title>
      <MenuContainer>
        <SelectButtons
          items={items.current}
        />
        <ModeBackButtons>
          {
            (!!params.genre || !!params.country || !!params.year) && (
              <BackButton />
            )
          }
          {
            (!!params.genre || !!params.country || !!params.year || location.pathname.search('top') !== -1) && (
              <SelectViewButtons />
            )
          }
        </ModeBackButtons>
      </MenuContainer>
      <Outlet />
    </PageContainer>
  );
};

export default MoviesPage;
