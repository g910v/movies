import React, { useEffect } from 'react';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';

const PremieresPage: React.FC = () => {
  const { uiStore } = useRootStore();

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.PREMIERES.name);
  }, [uiStore]);

  return (
    <>
      premieres
    </>
  );
};

export default PremieresPage;
