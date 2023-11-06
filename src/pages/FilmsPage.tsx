import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import {
  Outlet,
} from 'react-router-dom';
import SelectButton from '../components/styled/SelectButtons';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';

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

const FilmsPage: React.FC = () => {
  const { uiStore, filmsStore } = useRootStore();
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
  const [selectedItem, setSelectedItem] = useState(items.current[0]);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.FILMS.name);
    filmsStore.fetchFilms();
  }, [uiStore, filmsStore]);

  return (
    <PageContainer>
      <Title>{routes.FILMS.name}</Title>
      <SelectButton
        items={items.current}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Outlet />
    </PageContainer>
  );
};

export default observer(FilmsPage);
