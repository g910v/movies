import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout: React.FC = () => (
  <>
    <Header />
    <MainContainer>
      <Outlet />
    </MainContainer>
  </>
);

export default Layout;
