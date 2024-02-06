import styled from 'styled-components';
import baseTheme from '../styles/theme';

const Description = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  @media ${baseTheme.media.m} {
    text-align: center;
  }
`;

export default Description;
