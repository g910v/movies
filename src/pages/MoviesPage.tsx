import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import {
  Outlet, useNavigate, useParams,
} from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import SelectButton from '../components/styled/SelectButtons';
import { useRootStore } from '../hooks';
import baseTheme from '../styles/theme';

export const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 200;
`;

export const PageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 0.7rem;
  height: 3rem;
`;

const BackIcon = styled.div`
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

interface Props {
  pageName: string,
}

const MoviesPage: React.FC<Props> = ({ pageName }) => {
  const { uiStore } = useRootStore();
  const navigate = useNavigate();
  const params = useParams();
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
  }, [uiStore, pageName]);

  return (
    <PageContainer>
      <Title>{pageName}</Title>
      <MenuContainer>
        <SelectButton
          items={items.current}
        />
        {
          (!!params.genre || !!params.country || !!params.year) && (
            <BackIcon onClick={() => navigate(-1)}>
              <BiLeftArrowAlt />
            </BackIcon>
          )
        }
      </MenuContainer>
      <Outlet />
    </PageContainer>
  );
};

export default observer(MoviesPage);
