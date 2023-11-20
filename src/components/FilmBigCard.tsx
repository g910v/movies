import React from 'react';
import styled from 'styled-components';
import { BiBookmark } from 'react-icons/bi'; // BiSolidBookmark
import Card from './styled/Card';
import baseTheme from '../styles/theme';
import { IFilm } from '../stores/FilmsStore';

const Image = styled.img`
  width: 7rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
`;

const TextContainer = styled(Container)`
  margin-left: 1rem;
`;

const ActiveContainer = styled(Container)`
  margin-left: auto;
  align-items: end;
`;

const IconSelect = styled.span`
  font-size: 1.8rem;
  padding: 0.3rem 0.3rem 0 0;
  color: ${baseTheme.colors.yellow}
`;

const FilmName = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Description = styled.div`
  color: ${baseTheme.colors.textSecondary}
`;

interface Props {
  film: IFilm,
}

const FilmBigCard: React.FC<Props> = ({ film }) => (
  <Card>
    <Image src={film.poster} alt={film.name} />
    <TextContainer>
      <FilmName>{film.name}</FilmName>
      <div>
        <div>{film.enName}, {film.year}</div>
        <div>Рейтинг: {film.rating}</div>
      </div>
      <div>
        <Description>
          {
            film.countries.map((f, index, arr) => {
              const comma = index === arr.length - 1 ? '' : ', ';
              return f + comma;
            })
          } • {
            film.genres.map((f, index, arr) => {
              const comma = index === arr.length - 1 ? '' : ', ';
              return f + comma;
            })
          }
        </Description>
      </div>
    </TextContainer>
    <ActiveContainer>
      <IconSelect><BiBookmark /></IconSelect>
    </ActiveContainer>
  </Card>
);

export default FilmBigCard;
