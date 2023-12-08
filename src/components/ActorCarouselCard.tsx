import React from 'react';
import styled from 'styled-components';
import { IActor } from '../stores/ActorsStore';

const Image = styled.img`
  width: 9rem;
  height: 14rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
`;

interface Props {
  actor: IActor,
}

const ActorCarouselCard: React.FC<Props> = ({ actor }) => (
  <Container>
    <Image src={actor.posterUrl} alt={actor.nameEn ?? ''} />
    <div>{actor.nameRu}</div>
  </Container>
);

export default ActorCarouselCard;
