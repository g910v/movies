import React, { memo } from 'react';
import styled from 'styled-components';
import baseTheme from '../../../shared/styles/theme';

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media ${baseTheme.media.m} {
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
  @media ${baseTheme.media.l} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media ${baseTheme.media.m} {
    text-align: center;
  }
`;

interface Props {
  name: string,
  enName: string | null | undefined,
  movieType?: string,
}

const TitleInfoPage: React.FC<Props> = ({ name, enName, movieType }) => (
  <MainTitle>
    <Title>
      {name}
    </Title>
    {
      (enName || movieType) && <Title>({enName && enName}{movieType && <>{enName && <>, </>}{movieType === 'movie' ? 'фильм' : 'сериал'}</>})</Title>
    }
  </MainTitle>
);

export default memo(TitleInfoPage);
