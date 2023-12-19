import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import {
  Outlet, useLocation, useNavigate, useParams,
} from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import { useRootStore } from '../hooks';
import baseTheme from '../styles/theme';
import { PageContainer, Title, SelectButtons } from '../components/styled';
import SelectViewButtons from '../components/SelectViewButtons';

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  margin: 0.7rem 0;
  height: 3rem;
`;

const BackIcon = styled.div`
  font-size: 1.7rem;
  cursor: pointer;
  transform: scale(-1, 1);
  &:hover {
    color: ${baseTheme.colors.mix};
  }
  margin: 0 1rem 0;
`;

interface Props {
  pageName: string,
}

const MoviesPage: React.FC<Props> = ({ pageName }) => {
  const { uiStore } = useRootStore();
  const navigate = useNavigate();
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
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          {
            (!!params.genre || !!params.country || !!params.year) && (
              <BackIcon onClick={() => navigate(-1)}>
                <BiExit />
              </BackIcon>
            )
          }
          {
            (!!params.genre || !!params.country || !!params.year || location.pathname.search('top') !== -1) && (
              <SelectViewButtons />
            )
          }
        </div>
      </MenuContainer>
      <Outlet />
    </PageContainer>
  );
};

export default observer(MoviesPage);
