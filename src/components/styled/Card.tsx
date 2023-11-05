import styled from 'styled-components';
import baseTheme from '../../styles/theme';

const Card = styled.div`
  width: 100%;
  background: ${baseTheme.colors.bgSecondary};
  padding: 1rem;
  border-radius: 5px;
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(60px);
  -webkit-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.1);
  -moz-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.1);
  box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.1);
  cursor: pointer;
  margin: 2rem 0rem 1rem;
  display: flex;
  align-items: center;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.15);
    -moz-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.15);
    box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.15);
  }
`;

export default Card;
