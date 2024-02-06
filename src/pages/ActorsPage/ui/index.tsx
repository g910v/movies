import React, { useEffect } from 'react';
import routes from '../../../shared/routes';
import {
  PageContainer, Title,
} from '../../../shared/ui';
import { useRootStore } from '../../../shared/libs/hooks';
import { ActorList } from '../../../widgets';
import { ActorsSearch } from '../../../features';

const ActorsPage: React.FC = () => {
  const { uiStore } = useRootStore();

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.ACTORS.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <Title>Актеры</Title>
      <ActorsSearch />
      <ActorList />
    </PageContainer>
  );
};

export default ActorsPage;
