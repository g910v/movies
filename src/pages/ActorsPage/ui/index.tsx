import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import routes from '../../../shared/routes';
import {
  PageContainer, Title, Input, Button,
} from '../../../shared/ui';
import baseTheme from '../../../shared/styles/theme';
import { useRootStore } from '../../../shared/libs/hooks';
import { ActorList } from '../../../widgets';

const Search = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  margin-top: 1rem;
`;

const Requier = styled.small`
  color: ${baseTheme.colors.mix};
`;

const ActorsPage: React.FC = () => {
  const { uiStore, actorStote } = useRootStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const [showRequier, setShowRequier] = useState(false);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.ACTORS.name);
  }, [uiStore]);

  useEffect(
    () => {
      const value = searchParams.get('search');
      if (value) {
        setSearchValue(value);
      }
      return () => {
        actorStote.resetActorList();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onChangeInput = (value: string) => {
    setSearchValue(value);
    if (value.length >= 2) {
      setShowRequier(false);
    }
  };

  const onSearch = () => {
    if (searchValue.length < 2) {
      setShowRequier(true);
      return;
    }
    setSearchParams(param => {
      param.set('search', searchValue);
      return param;
    });
  };

  return (
    <PageContainer>
      <Title>Актеры</Title>
      <Search>
        <Input placeholder="Поиск актеров" value={searchValue} onChange={e => onChangeInput(e.target.value)} />
        <Button label="Найти" onClick={onSearch} />
      </Search>
      {
        showRequier && (<Requier>Имя актера должно содержать хотя бы 2 буквы</Requier>)
      }
      <ActorList />
    </PageContainer>
  );
};

export default ActorsPage;
