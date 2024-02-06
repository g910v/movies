import styled from 'styled-components';
import baseTheme from '../styles/theme';

const InfoContainer = styled.div<{poster: boolean}>`
  width: ${props => (props.poster ? 'calc(100% - 45vh - 1rem)' : '100%')};
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
  @media ${baseTheme.media.l} {
    width: ${props => (props.poster ? 'calc(100% - 37vh - 1rem)' : '100%')};
  }
  @media ${baseTheme.media.m} {
    width: 100%;
    align-items: center;
  }
`;

export default InfoContainer;
