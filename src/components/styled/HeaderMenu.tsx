import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import baseTheme from '../../styles/theme';
import Input from './Input';

interface Props {
  items: {
    label: string,
    onclick: () => void,
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

const Item = styled.div`
  padding: 0.6rem 2%;
  cursor: pointer;
  &:hover {
    ${textGradient}
  }
`;

const SearchIcon = styled(Item)`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
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
      <Title>MOVIES</Title>
      {
        searchVisible
          ? (
            <SearchInput>
              <Input placeholder="Поиск" value={inputValue} onChange={e => onChangeInputValue(e.target.value)} />
              <SearchIcon onClick={closeSearch}>
                <FaTimes />
              </SearchIcon>
            </SearchInput>
          ) : (
            <>
              {
                items.map(i => (
                  <Item key={i.label} onClick={i.onclick}>
                    {i.label}
                  </Item>
                ))
              }
              <SearchIcon onClick={() => setSearchVisible(true)}>
                <FaSearch />
              </SearchIcon>
            </>
          )
      }
    </Container>
  );
};

export default HeaderMenu;
