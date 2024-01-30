import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Outlet, useLocation, useParams,
} from 'react-router-dom';
import {
  PageContainer, Title, NavigateButtons,
} from '../../../shared/ui';
import { useRootStore } from '../../../shared/libs/hooks';
import { BackButton, SelectViewButtons } from '../../../features';
import navMenuItems from '../consts/navigateMenuItems';

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.7rem 0;
  height: 3rem;
`;

const ModeBackButtons = styled.div`
  margin-left: auto;
  display: flex;
  column-gap: 0.5rem;
  margin-top: -0.25rem;
`;

interface Props {
  pageName: string,
}

const MoviesPage: React.FC<Props> = ({ pageName }) => {
  const { uiStore } = useRootStore();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    uiStore.updateDocumentTitle(pageName);
  }, [uiStore, pageName, location]);

  return (
    <PageContainer>
      <Title>{pageName}</Title>
      <MenuContainer>
        <NavigateButtons
          items={navMenuItems}
        />
        <ModeBackButtons>
          {
            (!!params.genre || !!params.country || !!params.year) && (
              <BackButton />
            )
          }
          {
            (!!params.genre || !!params.country || !!params.year || location.pathname.search('top') !== -1) && (
              <SelectViewButtons />
            )
          }
        </ModeBackButtons>
      </MenuContainer>
      <Outlet />
    </PageContainer>
  );
};

export default MoviesPage;
