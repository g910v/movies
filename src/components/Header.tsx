import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenu from './styled/HeaderMenu';
import routes from '../shared/routes';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const menuItems = useRef([
    {
      label: routes.FILMS.name,
      onclick: () => navigate(routes.FILMS.path, { replace: false }),
    },
    {
      label: routes.SERIES.name,
      onclick: () => navigate(routes.SERIES.path, { replace: false }),
    },
    {
      label: routes.ACTORS.name,
      onclick: () => navigate(routes.ACTORS.path, { replace: false }),
    },
    {
      label: routes.SAVED.name,
      onclick: () => navigate(routes.SAVED.path, { replace: false }),
    },
  ]);

  return (
    <HeaderMenu items={menuItems.current} inputValue={searchValue} onChangeInputValue={setSearchValue} />
  );
};

export default Header;
