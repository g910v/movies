import styled from 'styled-components';
import baseTheme from '../../../styles/theme';

const PageContainer = styled.div`
  width: 80%;
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  height: calc(100% - 3rem);
  @media ${baseTheme.media.m} {
    width: 95%;
    margin: 0 0 2rem 0;
  }
`;

export default PageContainer;
