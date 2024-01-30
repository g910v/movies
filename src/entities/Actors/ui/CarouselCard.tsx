import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IActor } from '../types/actorList';
import baseTheme from '../../../shared/styles/theme';

const Image = styled.img`
  width: 9rem;
  height: 14rem;
  border-radius: 5px;
`;

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  color: ${baseTheme.colors.text};
`;

interface Props {
  actor: IActor,
}

const CarouselCard: React.FC<Props> = memo(({ actor }) => (
  <Container to={`/person/${actor.kinopoiskId}`}>
    <Image src={actor.posterUrl} alt={actor.nameEn ?? ''} />
    <div>{actor.nameRu}</div>
  </Container>
));

export default CarouselCard;
