import styled from 'styled-components';
import baseTheme from '../styles/theme';

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 200;
  @media ${baseTheme.media.s} {
    font-size: 2.5rem;
  }
`;

export default Title;
