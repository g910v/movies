import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns';
import { Card } from './styled';
import baseTheme from '../styles/theme';
import { IFilm } from '../stores/FilmsStore';
import { useRootStore } from '../hooks';

const CardFixed = styled(Card)`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Container = styled.div`
  height: max-content;
  position: relative;
  cursor: pointer;
`;

const MoreContainer = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
  height: calc(100% - 5.5rem);
  padding: 1.5rem 2rem 4rem;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 1.15rem;
  margin-top: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const EnName = styled.div`
  font-weight: 800;
  margin-bottom: 0.75rem;
`;

const Rating = styled.div`
  /* font-weight: 500; */
  /* font-size: 0.8rem; */
`;

const Description = styled.div`
  margin-top: 1rem;
`;

const ActiveContainer = styled(Container)`
  margin-bottom: auto;
  margin-left: auto;
  align-items: end;
  justify-content: start;

`;

const IconSelect = styled.span`
  font-size: 1.8rem;
  color: ${baseTheme.colors.yellow};
  cursor: pointer;
`;

interface Props {
  film: IFilm,
}

const FilmSmallCard: React.FC<Props> = ({ film }) => {
  const [nameVisible, setNameVisible] = useState(false);
  const { filmsStore } = useRootStore();

  useEffect(() => {
    console.log(filmsStore.savedFilms);
  }, [filmsStore.savedFilms]);

  return (
    <Container
      onMouseEnter={() => setNameVisible(true)}
      onMouseLeave={() => setNameVisible(false)}
    >
      <CardFixed>
        <Image src={film.poster} alt={film.enName ?? ''} />
        {
          nameVisible && (
            <MoreContainer>
              <ActiveContainer>
                <IconSelect onClick={() => filmsStore.changeSavedFilms(film, !film.saved)}>
                  {
                    film.saved ? (<BiSolidBookmark />) : (<BiBookmark />)
                  }
                </IconSelect>
              </ActiveContainer>
              {film.enName && (<EnName>{film.enName}</EnName>)}
              {film.rating && (<Rating>Рейтинг: {film.rating?.toFixed(1)}</Rating>)}
              <Rating>{film.year && (<>{film.year} г.</>)} {film.duration && (<>, {film.duration} мин.</>)}</Rating>
              {
                film.premiereRu && (<Rating>Премьера в России: {format(new Date(film.premiereRu ?? ''), 'dd.MM.Y')}</Rating>)
              }
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
            </MoreContainer>
          )
        }
        <Name>{film.name}</Name>
      </CardFixed>
    </Container>
  );
};

export default observer(FilmSmallCard);