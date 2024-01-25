import React, { useState } from 'react';
import styled from 'styled-components';
import months from '../consts/months';
import years from '../consts/years';
import { Select } from '../../../shared/ui';
import { IOption } from '../types/IOption';

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

const SelectPremierDate: React.FC = () => {
  const [year, setYear] = useState<IOption | null>(years[0]);
  const [month, setMonth] = useState<IOption | null>(months[0]);

  return (
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
};

export default SelectPremierDate;
