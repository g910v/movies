import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import routes from '../shared/routes';
import baseTheme, { textGradient } from '../styles/theme';
import HeaderMobileMenu from './HeaderMobileMenu';

const Container = styled.div`
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  display: flex;
  align-items: center;
  background: ${baseTheme.colors.headerGradient};
  z-index: 10;
  position: relative;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-right: auto;
  font-weight: 800;
  ${textGradient}
  z-index: 15;
`;

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
    <Container>
      <Title>
        <Link to={routes.PREMIERES.path}>MOVIES</Link>
      </Title>
      <HeaderMenu items={menuItems.current} />
      <HeaderMobileMenu items={menuItems.current} />
    </Container>
  );
};

export default Header;
