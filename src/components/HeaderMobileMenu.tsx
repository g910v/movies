import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BiChevronLeft, BiMenu, BiX } from 'react-icons/bi';
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

const itemStyle = css`
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: ${baseTheme.colors.text} !important;
  &:hover {
    ${textGradient}
  }
`;

const BackMenu = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  &:hover{
    color: ${baseTheme.colors.yellow};
    ${textGradient}
  }
`;

const BackIcon = styled(BiChevronLeft)`
  font-size: 1.25rem;
  margin-top: 0.15rem;
`;

const HeaderSearchContainer = styled.div<{state: string}>`
  width: 80%;
  height: 80%;
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  transform: translateX(${props => (props.state === 'exiting' || props.state === 'exited' ? '40vw' : '0')});
  transition: all 0.25s ease-in;
`;

const Menu = styled.div<{state: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1vh;
  height: 100%;
  transition: all 0.25s ease-in;
  transform: translateX(${props => (props.state === 'exiting' || props.state === 'exited' ? '-40vw' : '0')});
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
`;

const Container = styled.div`
  display: none;
  width: calc(100% - 10rem);
  justify-content: end;
  @media ${baseTheme.media.m} {
    display: flex;
  }
`;

const MenuContainer = styled.div<{state: string}>`
  position: fixed;
  background: ${baseTheme.colors.bg};
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;
  transition: all 0.25s ease-in;
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled(Link)`
  ${itemStyle}
`;

const ItemSearch = styled.div`
  ${itemStyle}
`;

const MenuIcon = styled.div`
  display: flex;
  place-items: center;
  padding: 0.6rem 1rem;
  margin-left: 1.5%;
  font-size: 1.7rem;
  z-index: 10;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const HeaderMobileMenu: React.FC<Props> = ({ items }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const closeSearch = () => {
    setSearchVisible(false);
  };

  useEffect(() => {
    if (!menuVisible) {
      setSearchVisible(false);
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [menuVisible]);

  return (
    <Container>
      <MenuIcon onClick={() => setMenuVisible(prev => !prev)}>
        {
          menuVisible ? <BiX /> : <BiMenu />
        }
      </MenuIcon>
      <Transition in={menuVisible} timeout={250} mountOnEnter unmountOnExit>
        {
          state => (
            <MenuContainer state={state}>
              <SwitchTransition>
                <Transition
                  key={searchVisible ? 'search' : 'menulist'}
                  timeout={250}
                  mountOnEnter
                  unmountOnExit
                >
                  {
                    state => (
                      searchVisible ? (
                        <HeaderSearchContainer state={state}>
                          <BackMenu onClick={closeSearch}><BackIcon /> меню</BackMenu>
                          <HeaderSearch closeSearch={closeSearch} />
                        </HeaderSearchContainer>
                      ) : (
                        <Menu state={state}>
                          <ItemSearch key="search" onClick={() => setSearchVisible(true)}>Поиск</ItemSearch>
                          {
                            items.map(i => (
                              <Item to={i.path} key={i.label} onClick={() => setMenuVisible(false)}>
                                {i.label}
                              </Item>
                            ))
                          }
                        </Menu>
                      )
                    )
                  }
                </Transition>
              </SwitchTransition>
            </MenuContainer>
          )
        }
      </Transition>
    </Container>
  );
};

export default HeaderMobileMenu;
