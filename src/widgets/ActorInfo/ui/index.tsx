import { format } from 'date-fns';
import React, { memo } from 'react';
import ruLocale from 'date-fns/locale/ru';
import { TitleInfoPage } from '../../../features';
import { Description, InfoContainer } from '../../../shared/ui';
import { TActorInfo } from '../../../entities';

interface Props {
  actor: TActorInfo,
}

const ActorInfo: React.FC<Props> = ({ actor }) => (
  <InfoContainer poster={!!actor.photo}>
    <TitleInfoPage name={actor.name ?? ''} enName={actor.enName} />
    {
      actor.sex && (
        <Description>
          Пол: {actor.sex}
        </Description>
      )
    }
    {
      actor.age && (
        <Description>
          Возраст: {actor.age}
        </Description>
      )
    }
    {
      actor.birthday && (
        <Description>
          Дата рождения: {format(new Date(actor.birthday), 'dd MMMM Y', { locale: ruLocale })}
        </Description>
      )
    }
    {
      actor.birthPlace?.length && (
        <Description>
          Место рождения: {actor.birthPlace?.map((i, index, arr) => {
          const comma = index === arr.length - 1 ? '' : ', ';
          return i.value + comma;
        })}
        </Description>
      )
    }
    {
      actor.growth && (
        <Description>
          Рост: {actor.growth}
        </Description>
      )
    }
    {
      actor.countAwards && (
        <Description>
          Количество наград: {actor.countAwards}
        </Description>
      )
    }
    <Description>
      Карьера: {actor.profession?.map((i, index, arr) => {
      const comma = index === arr.length - 1 ? '' : ', ';
      return i.value + comma;
    })}
    </Description>
    <Description>
      Количество фильмов: {actor.movies?.length ?? 0}
    </Description>
    {
      actor?.death && (
        <Description>
          Дата смерти: {format(new Date(actor.death), 'dd MMMM Y', { locale: ruLocale })}
        </Description>
      )
    }
    {
      !!actor.deathPlace?.length && (
        <Description>
          Место смерти: {actor.deathPlace?.map((i, index, arr) => {
          const comma = index === arr.length - 1 ? '' : ', ';
          return i.value + comma;
        })}
        </Description>
      )
    }
  </InfoContainer>
);

export default memo(ActorInfo);
