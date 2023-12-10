import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from './styled';
import { IActor } from '../stores/ActorsStore';
import baseTheme from '../styles/theme';

const ActorCard = styled(Link)`
  width: 100%;
  color: ${baseTheme.colors.text};
`;

const Image = styled.img`
  width: 7rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7.5rem;
  margin-left: 1rem;
`;

const ActorName = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

interface Props {
  actor: IActor,
}

const ActorBigCard: React.FC<Props> = ({ actor }) => (
  <ActorCard to={`/person/${actor.kinopoiskId}`}>
    <Card>
      <Image src={actor.posterUrl} alt={actor.nameEn ?? ''} />
      <Container>
        <ActorName>{actor.nameRu}</ActorName>
        <div>{actor.nameEn}</div>
        <div>Пол: {actor.sex}</div>
      </Container>
    </Card>
  </ActorCard>
);

export default ActorBigCard;
