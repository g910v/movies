import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenu from './styled/HeaderMenu';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const menuItems = useRef([
    {
      label: 'Фильмы',
      onclick: () => navigate('/films', { replace: false }),
    },
    {
      label: 'Сериалы',
      onclick: () => navigate('/series', { replace: false }),
    },
    {
      label: 'Актеры',
      onclick: () => navigate('/actors', { replace: false }),
    },
    {
      label: 'Сохраненное',
      onclick: () => navigate('/saved', { replace: false }),
    },
  ]);

  return (
    <HeaderMenu items={menuItems.current} inputValue={searchValue} onChangeInputValue={setSearchValue} />
  );
};

export default Header;
