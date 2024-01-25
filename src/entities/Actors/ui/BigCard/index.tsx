import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from './styled';
import { IActor } from '../stores/ActorsStore';
import baseTheme from '../styles/theme';

const ActorCard = styled(Link)`
  width: 100%;
  color: ${baseTheme.colors.text};
`;

const FixedCard = styled(Card)`
  width: auto;
`;

const Image = styled.img`
  width: 7rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  height: 11rem;
  margin-left: 1rem;
`;

const ActorName = styled.div`
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 600;
`;

interface Props {
  actor: IActor,
}

const ActorBigCard: React.FC<Props> = memo(({ actor }) => (
  <ActorCard to={`/person/${actor.kinopoiskId}`}>
    <FixedCard>
      <Image src={actor.posterUrl} alt={actor.nameEn ?? ''} />
      <Container>
        <ActorName>{actor.nameRu}</ActorName>
        <div>{actor.nameEn}</div>
        <div>Пол: {actor.sex}</div>
      </Container>
    </FixedCard>
  </ActorCard>
));

export default ActorBigCard;
