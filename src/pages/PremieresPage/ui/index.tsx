import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import routes from '../../../shared/routes';
import { PageContainer, Title } from '../../../shared/ui';
import { useRootStore } from '../../../shared/libs/hooks';
import {
  MovieList, SelectPremierDate, months, years,
} from '../../../widgets';
import { TPremiereFilters } from '../../../entities';
import { SelectViewButtons } from '../../../features';
import { IOption } from '../../../shared/types';

const ModeButtons = styled.div`
  margin-left: auto;
  padding-top: 1rem;
`;

const PremieresPage: React.FC = () => {
  const { uiStore } = useRootStore();
  const [year, setYear] = useState<IOption | null>(years[0]);
  const [month, setMonth] = useState<IOption | null>(months[0]);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.PREMIERES.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title>Премьеры</Title>
        <ModeButtons>
          <SelectViewButtons />
        </ModeButtons>
      </div>
      <SelectPremierDate
        year={year}
        month={month}
        setMonth={setMonth}
        setYear={setYear}
      />
      <MovieList
        type="PREMIERES"
        premiereFilters={{
          year: Number(year?.value),
          month: month?.value as TPremiereFilters['month'],
        }}
      />
    </PageContainer>
  );
};

export default observer(PremieresPage);
