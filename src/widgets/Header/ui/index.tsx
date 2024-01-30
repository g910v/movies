import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import routes from '../../../shared/routes';
import baseTheme, { textGradient } from '../../../shared/styles/theme';
import MobileMenu from './MobileMenu';
import menuItems from '../consts/menuItems';

const Container = styled.div`
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  display: flex;
  align-items: center;
  background: ${baseTheme.colors.headerGradient};
  z-index: 10;
  position: relative;
  overflow: hidden;
  max-width: 1700px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-right: auto;
  font-weight: 800;
  ${textGradient}
  z-index: 15;
`;

const Header: React.FC = () => (
  <Container>
    <Title>
      <Link to={routes.PREMIERES.path}>MOVIES</Link>
    </Title>
    <DesktopMenu items={menuItems} />
    <MobileMenu items={menuItems} />
  </Container>
);

export default Header;
