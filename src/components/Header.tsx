import React, { useRef } from 'react';
import HeaderMenu from './HeaderMenu';
import routes from '../shared/routes';

const Header: React.FC = () => {
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
      path: `${routes.SERIES.path}/top`,
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
    <HeaderMenu items={menuItems.current} />
  );
};

export default Header;
