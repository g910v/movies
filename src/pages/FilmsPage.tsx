import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import SelectButton from '../components/styled/SelectButtons';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';
import TypeFilmCard from '../components/TypeFilmCard';
import genres from '../shared/genres';
import countries from '../shared/countries';

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
  const { uiStore } = useRootStore();
  const items = useRef([
    {
      label: 'Топ',
      key: 1,
    },
    {
      label: 'Жанры',
      key: 2,
    },
    {
      label: 'Годы',
      key: 3,
    },
    {
      label: 'Страны',
      key: 4,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(items.current[0]);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.FILMS.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <Title>{routes.FILMS.name}</Title>
      <SelectButton
        items={items.current}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {
        selectedItem.key === 2 && (<TypeFilmCard types={genres} />)
      }
      {
        selectedItem.key === 4 && (<TypeFilmCard types={countries} />)
      }
    </PageContainer>
  );
};

export default observer(FilmsPage);
