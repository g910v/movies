import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
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
  font-weight: 600;
  cursor: pointer;
  color: ${baseTheme.colors.text} !important;
  &:hover {
    ${textGradient}
  }
  transition: all 0.15s ease-in;
  transform: translateX(${props => (props.state === 'exiting' || props.state === 'exited' ? '-20vw' : '0')});
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
`;

const Search = styled.div<{ state: string }>`
  width: 60%;
  display: flex;
  position: relative;
  align-items: center;
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  transform: translateX(${props => (props.state === 'exiting' || props.state === 'exited' ? '20vw' : '0')});
  transition: all 0.15s ease-in;
  margin-right: -1%;
`;

const SearchIcon = styled.div`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
  margin-left: 1.5%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
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
      <SwitchTransition>
        <Transition
          key={searchVisible ? 'search' : 'menulist'}
          timeout={150}
          mountOnEnter
          unmountOnExit
        >
          {
            state => (
              searchVisible
                ? (
                  <Search state={state}>
                    <HeaderSearch closeSearch={closeSearch} />
                  </Search>
                ) : (
                  <>
                    {
                      items.map(i => (
                        <Item to={i.path} key={i.label} state={state}>
                          {i.label}
                        </Item>
                      ))
                    }
                  </>
                )
            )
          }
        </Transition>
      </SwitchTransition>
      <SearchIcon onClick={searchVisible ? closeSearch : () => setSearchVisible(true)}>
        {
          searchVisible ? <BiX /> : <BiSearchAlt />
        }
      </SearchIcon>
    </MenuContainer>
  );
};

export default HeaderMenu;
