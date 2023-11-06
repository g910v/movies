import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BiSearchAlt, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import baseTheme from '../../styles/theme';
import Input from './Input';
import routes from '../../shared/routes';

interface Props {
  items: {
    label: string,
    path: string,
  }[],
  inputValue: string,
  onChangeInputValue: React.Dispatch<React.SetStateAction<string>>,
}

const textGradient = css`
  background-image: ${baseTheme.colors.gradient};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const Container = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-right: auto;
  font-weight: 800;
  ${textGradient}
`;

const Item = styled(Link)`
  padding: 0.6rem 2%;
  cursor: pointer;
  color: ${baseTheme.colors.text} !important;
  &:hover {
    ${textGradient}
  }
`;

const SearchIcon = styled.div`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const SearchInput = styled.div`
  width: 40%;
  display: flex;
`;

const HeaderMenu: React.FC<Props> = ({ items, inputValue, onChangeInputValue }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const closeSearch = () => {
    setSearchVisible(false);
    onChangeInputValue('');
  };

  return (
    <Container>
      <Title>
        <Link to={routes.PREMIERES.path}>MOVIES</Link>
      </Title>
      {
        searchVisible
          ? (
            <SearchInput>
              <Input placeholder="Поиск" value={inputValue} onChange={e => onChangeInputValue(e.target.value)} />
              <SearchIcon onClick={closeSearch}>
                <BiX />
              </SearchIcon>
            </SearchInput>
          ) : (
            <>
              {
                items.map(i => (
                  <Item to={i.path} key={i.label}>
                    {i.label}
                  </Item>
                ))
              }
              <SearchIcon onClick={() => setSearchVisible(true)}>
                <BiSearchAlt />
              </SearchIcon>
            </>
          )
      }
    </Container>
  );
};

export default HeaderMenu;
