import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../hooks';
import routes from '../shared/routes';
import { PageContainer, Title } from './MoviesPage';
import MovieList from '../components/MovieList';
import { IPremiereFilters } from '../stores/FilmsStore';
import StyledSelect from '../components/styled/Select';
import months, { years } from '../shared/premierOptions';

export interface Option {
  value: string,
  label: string,
}

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1.4rem;
`;

const Filter = styled.div`
  width: 49%;
`;

const PremieresPage: React.FC = () => {
  const { uiStore } = useRootStore();
  const [year, setYear] = useState<Option | null>(years[0]);
  const [month, setMonth] = useState<Option | null>(months[0]);

  useEffect(() => {
    uiStore.updateDocumentTitle(routes.PREMIERES.name);
  }, [uiStore]);

  return (
    <PageContainer>
      <Title>Премьеры</Title>
      <FiltersContainer>
        <Filter>
          <StyledSelect
            options={months}
            selected={month}
            setSelected={setMonth}
          />
        </Filter>
        <Filter>
          <StyledSelect
            options={years}
            selected={year}
            setSelected={setYear}
          />
        </Filter>
      </FiltersContainer>
      <MovieList
        type="PREMIERES"
        premiereFilters={{
          year: Number(year?.value),
          month: month?.value as IPremiereFilters['month'],
        }}
      />
    </PageContainer>
  );
};

export default observer(PremieresPage);
