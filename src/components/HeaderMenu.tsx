import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import baseTheme, { textGradient } from '../styles/theme';
import HeaderSearch from './HeaderSearch';

interface Props {
  items: {
    label: string,
    path: string,
  }[],
}

const MenuContainer = styled.div`
  display: flex;
  width: calc(100% - 10rem);
  justify-content: end;
  @media ${baseTheme.media.m} {
    display: none;
  }
`;

const Item = styled(Link)`
  padding: 0.6rem 0.5rem;
  margin-left: 3.25%;
  cursor: pointer;
  color: ${baseTheme.colors.text} !important;
  &:hover {
    ${textGradient}
  }
`;

const Search = styled.div`
  width: 60%;
  display: flex;
  position: relative;
  align-items: center;
`;

const SearchIcon = styled.div`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
  margin-left: 1.5%;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const HeaderMenu: React.FC<Props> = ({ items }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const closeSearch = () => {
    setSearchVisible(false);
  };

  return (
    <MenuContainer>
      {
        searchVisible
          ? (
            <Search>
              <HeaderSearch closeSearch={closeSearch} />
              <SearchIcon onClick={closeSearch}>
                <BiX />
              </SearchIcon>
            </Search>
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
    </MenuContainer>
  );
};

export default HeaderMenu;
