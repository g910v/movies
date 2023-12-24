import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BiChevronLeft, BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
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

const HeaderSearchContainer = styled.div`
  width: 80%;
  height: 80%;
`;

const MenuContainer = styled.div`
  display: none;
  width: calc(100% - 10rem);
  justify-content: end;
  @media ${baseTheme.media.m} {
    display: flex;
  }
`;

const Menu = styled.div<{ visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  position: fixed;
  background: ${baseTheme.colors.bg};
  width: 100vw;
  height: calc(100vh - 0rem);
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1vh;
  
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
    <MenuContainer>
      <MenuIcon onClick={() => setMenuVisible(prev => !prev)}>
        {
          menuVisible ? <BiX /> : <BiMenu />
        }
      </MenuIcon>
      <Menu visible={menuVisible}>
        {
          searchVisible ? (
            <HeaderSearchContainer>
              <BackMenu onClick={closeSearch}><BackIcon /> меню</BackMenu>
              <HeaderSearch closeSearch={closeSearch} />
            </HeaderSearchContainer>
          ) : (
            <>
              <ItemSearch key="search" onClick={() => setSearchVisible(true)}>Поиск</ItemSearch>
              {
                items.map(i => (
                  <Item to={i.path} key={i.label} onClick={() => setMenuVisible(false)}>
                    {i.label}
                  </Item>
                ))
              }
            </>
          )
        }
      </Menu>
    </MenuContainer>
  );
};

export default HeaderMobileMenu;
