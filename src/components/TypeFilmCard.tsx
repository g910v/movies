import React from 'react';
import styled from 'styled-components';
import Card from './styled/Card';

interface Props {
  types: {
    name: string,
    short: string,
    img: string,
  }[];
}

const Image = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 10px;
`;

const TypeName = styled.div`
  font-size: 1.8rem;
  margin-left: 2rem;
  font-weight: 200;
`;

const TypeFilmCard: React.FC<Props> = ({ types }) => (
  <>
    {
        types.map(t => (
          <Card key={t.short}>
            <Image src={t.img} alt="l" />
            <TypeName>{t.name}</TypeName>
          </Card>
        ))
      }
  </>
);

export default TypeFilmCard;
