import React, { useRef, useState } from 'react';
import SelectButton from '../components/styled/SelectButtons';

const FilmsPage: React.FC = () => {
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

  return (
    <SelectButton
      items={items.current}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  );
};

export default FilmsPage;
