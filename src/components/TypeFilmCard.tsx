import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const TypeFilmCard: React.FC<Props> = ({ types }) => {
  const navigate = useNavigate();
  return (
    <>
      {
        types.map(t => (
          <Card key={t.short} onClick={() => navigate(`${t.short}`, { replace: false })}>
            <Image src={t.img} alt="poster" />
            <TypeName>{t.name}</TypeName>
          </Card>
        ))
      }
    </>
  );
};

export default TypeFilmCard;
