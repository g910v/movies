import styled from 'styled-components';
import baseTheme from '../../styles/theme';

const Card = styled.div`
  width: 100%;
  background: ${baseTheme.colors.bgSecondary};
  padding: 1rem;
  border-radius: 5px;
  backdrop-filter: blur(60px);
  display: flex;
  align-items: center;
  transition: all .2s ease;
  &:hover {
    background: ${baseTheme.colors.bgLighter};
  }
`;

export default Card;
