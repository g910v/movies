import React, { useEffect } from 'react';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';

const SeriesPage: React.FC = () => {
  const { uiStore } = useRootStore();

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.SERIES.name);
  }, [uiStore]);

  return (
    <>
      series
    </>
  );
};

export default SeriesPage;
