import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import {
  Outlet, useNavigate,
} from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import SelectButton from '../components/styled/SelectButtons';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';
import baseTheme from '../styles/theme';

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 200;
`;

const PageContainer = styled.div`
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
`;

const BackIcon = styled.div`
  font-size: 1.7rem;
  padding-top: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const FilmsPage: React.FC = () => {
  const { uiStore } = useRootStore();
  const navigate = useNavigate();
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
    // {
    //   label: 'Годы',
    //   short: 'years',
    //   key: 3,
    // },
    {
      label: 'Страны',
      short: 'countries',
      key: 4,
    },
  ]);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.FILMS.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <Title>{routes.FILMS.name}</Title>
      <MenuContainer>
        <SelectButton
          items={items.current}
        />
        <BackIcon onClick={() => navigate(-1)}>
          <BiLeftArrowAlt />
        </BackIcon>
      </MenuContainer>
      <Outlet />
    </PageContainer>
  );
};

export default observer(FilmsPage);
