import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Content from './components/Content';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <MainContainer>
      <Content />
    </MainContainer>
  </>
);

export default App;
