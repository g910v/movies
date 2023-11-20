import React, { useRef, useState } from 'react';
import HeaderMenu from './styled/HeaderMenu';
import routes from '../shared/routes';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const menuItems = useRef([
    {
      label: routes.PREMIERES.name,
      path: routes.PREMIERES.path,
    },
    {
      label: routes.FILMS.name,
      path: `${routes.FILMS.path}/top`,
    },
    {
      label: routes.SERIES.name,
      path: routes.SERIES.path,
    },
    {
      label: routes.ACTORS.name,
      path: routes.ACTORS.path,
    },
    {
      label: routes.SAVED.name,
      path: routes.SAVED.path,
    },
  ]);

  return (
    <HeaderMenu items={menuItems.current} inputValue={searchValue} onChangeInputValue={setSearchValue} />
  );
};

export default Header;
