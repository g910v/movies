import React, { memo, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 9rem;
  height: 14rem;
  border-radius: 5px;
`;

const Container = styled.div`
  height: max-content;
  position: relative;
  cursor: pointer;
`;

const MoreContainer = styled.div`
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  background: rgba(0,0,0, 0.8);
  height: calc(100% - 1rem);
  padding: 0.5rem;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 1.15rem;
  line-height: 1.2rem;
  margin-bottom: 0.25rem;
`;

const Rating = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
`;

interface IMovie {
  name: string,
  rating?: number,
  kId: number,
  poster: string,
  enName?: string,
  genres?: string[],
  year: number | string,
}

interface Props {
  movie: IMovie,
}

const CarouselCard: React.FC<Props> = ({ movie }) => {
  const [nameVisible, setNameVisible] = useState(false);
  return (
    <Container
      onMouseEnter={() => setNameVisible(true)}
      onMouseLeave={() => setNameVisible(false)}
    >
      <Image src={movie.poster} alt={movie.enName ?? ''} />
      {
        nameVisible && (
          <MoreContainer>
            <Name>{movie.name}</Name>
            <Rating>Рейтинг: {movie.rating?.toFixed(1)}</Rating>
            <Rating>{movie.year} г.</Rating>
          </MoreContainer>
        )
      }
    </Container>
  );
};

export default memo(CarouselCard);
