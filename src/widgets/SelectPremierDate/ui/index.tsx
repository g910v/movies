import React from 'react';
import styled from 'styled-components';
import months from '../consts/months';
import years from '../consts/years';
import { Select } from '../../../shared/ui';
import { IOption } from '../types/options';

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

interface Props {
  year: IOption | null,
  month: IOption | null,
  setMonth: React.Dispatch<React.SetStateAction<IOption | null>>,
  setYear: React.Dispatch<React.SetStateAction<IOption | null>>,
}

const SelectPremierDate: React.FC<Props> = ({
  year, month, setMonth, setYear,
}) => (
  <FiltersContainer>
    <Filter>
      <Select
        options={months}
        selected={month}
        setSelected={setMonth}
      />
    </Filter>
    <Filter>
      <Select
        options={years}
        selected={year}
        setSelected={setYear}
      />
    </Filter>
  </FiltersContainer>
);

export default SelectPremierDate;
