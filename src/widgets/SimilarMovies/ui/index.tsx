import React, { memo, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { MovieSmallCard } from '../../../entities';
import { TSimilarMovies } from '../types/similarMovie';
import baseTheme, { textGradient } from '../../../shared/styles/theme';
import { SubTitle } from '../../../shared/ui';

const Container = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const Movies = styled.div<{ state: string }>`
  transform: translateY(${props => (props.state === 'exiting' || props.state === 'exited' ? '-15px' : '0px')});
  opacity: ${props => (props.state === 'exiting' || props.state === 'exited' ? '0' : '1')};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  row-gap: 1rem;
  @media ${baseTheme.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`;

const SimilarTitle = styled(SubTitle)`
  cursor: pointer;
  width: fit-content;
  display: flex;
  margin-top: 0;
  &:hover {
    color: ${baseTheme.colors.pink};
    ${textGradient}
  }
`;

interface Props {
  similarMovies: TSimilarMovies,
}

const SimilarMovies: React.FC<Props> = ({ similarMovies }) => {
  const [showSimilar, setShowSimilar] = useState(false);
  return (
    <Container>
      <SimilarTitle onClick={() => setShowSimilar(prev => !prev)}>
        Похожие фильмы
        {
          showSimilar ? <BiChevronDown style={{ fontSize: '2.5rem' }} /> : <BiChevronUp style={{ fontSize: '2.5rem', marginBottom: '-0.5rem' }} />
        }
      </SimilarTitle>
      <Transition in={showSimilar} timeout={250} mountOnEnter unmountOnExit>
        {
        state => (
          <Movies state={state}>
            {
              similarMovies?.map(i => (
                <MovieSmallCard
                  key={i.id}
                  movie={{
                    name: i.name,
                    enName: i.alternativeName,
                    rating: i.rating?.kp ?? undefined,
                    poster: i.poster?.url ?? '',
                    posterPreview: i.poster?.previewUrl ?? '',
                    kId: i.id ?? -1,
                    year: i.year,
                    countries: [],
                    genres: [],
                    saved: null,
                  }}
                />
              ))
            }
          </Movies>
        )
      }
      </Transition>
    </Container>
  );
};

export default memo(SimilarMovies);
