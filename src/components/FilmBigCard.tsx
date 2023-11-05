import React from 'react';
import styled from 'styled-components';
import { BiBookmark } from 'react-icons/bi'; // BiSolidBookmark
import Card from './styled/Card';
import baseTheme from '../styles/theme';

const Image = styled.img`
  width: 7rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 11rem;
`;

const TextContainer = styled(Container)`
  margin-left: 1rem;
`;

const ActiveContainer = styled(Container)`
  margin-left: auto;
  align-items: end;
`;

const IconHeart = styled.span`
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

const FilmBigCard: React.FC = () => (
  <Card>
    <Image src="https://thumbs.dfs.ivi.ru/storage31/contents/0/1/d883454fc21f531dd791cf5e84803a.jpg" alt="l" />
    <TextContainer>
      <FilmName>Пираты карибского моря</FilmName>
      <div>
        <div>Pirates of the Caribbean, 2005, 128 мин.</div>
        <div>Рейтинг: 9.5</div>
      </div>
      <div>
        <Description>США • приключения, боевик, фэнтези</Description>
        <Description>Режиссер: Гор Вербински</Description>
        <Description>В ролях: Джонни Депп, Орландо Блум</Description>
      </div>
    </TextContainer>
    <ActiveContainer>
      <IconHeart><BiBookmark /></IconHeart>
    </ActiveContainer>
  </Card>
);

export default FilmBigCard;
