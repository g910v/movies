import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import SelectButton from '../components/styled/SelectButtons';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';

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
    <SelectButton
      items={items.current}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  );
};

export default observer(FilmsPage);
