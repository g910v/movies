import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import baseTheme from '../../styles/theme';

interface Props {
  rating: number,
}

const Container = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  font-weight: 800;
  color: ${baseTheme.colors.yellow};
  font-size: 1.25rem;
`;

const Text = styled.div`
  color: ${baseTheme.colors.text};
  font-size: 1.85rem;
`;

const RatingStars: React.FC<Props> = ({ rating }) => {
  const numbers = useRef([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const roundRating = useMemo(() => Math.round(rating * 2) / 2, [rating]);
  return (
    <Container>
      {
        numbers.current.map(i => {
          let star = <FaRegStar key={i} />;
          if (roundRating === i - 0.5) {
            star = <FaStarHalfAlt key={i} />;
          } else if (i <= roundRating) {
            star = <FaStar key={i} />;
          }
          return (
            star
          );
        })
      }
      <Text>{rating.toFixed(1)}</Text>
    </Container>
  );
};

export default RatingStars;
