import React from 'react';
import Select, { StylesConfig } from 'react-select';
import baseTheme from '../../../styles/theme';
import type { Option } from '../../../pages/PremieresPage';

interface Props {
  options: {
    value: string,
    label: string,
  }[],
  selected: {
    value: string,
    label: string,
  } | null,
  setSelected: React.Dispatch<React.SetStateAction<{
    value: string,
    label: string,
  } | null>>,
}

const selectStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    background: baseTheme.colors.bgSecondary,
    borderColor: isFocused ? baseTheme.colors.mix : baseTheme.colors.textSecondary,
    boxShadow: undefined,
    transition: 'all .15s linear',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ':hover': {
      ...styles[':hover'],
      borderColor: isFocused ? baseTheme.colors.mix : baseTheme.colors.input,
      boxShadow: undefined,
      cursor: 'pointer',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: baseTheme.colors.bgSecondary,
    zIndex: 15,
  }),
  option: (styles, {
    isDisabled, isFocused, isSelected,
  }) => ({
    ...styles,
    background: isFocused ? baseTheme.colors.gradient : isSelected ? baseTheme.colors.gradient : baseTheme.colors.bgSecondary,
    color: isFocused
      ? baseTheme.colors.bg
      : isSelected
        ? baseTheme.colors.bg
        : baseTheme.colors.text,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),
  singleValue: styles => ({
    ...styles,
    color: `${baseTheme.colors.text}`,
  }),
};

const StyledSelect: React.FC<Props> = ({ options, selected, setSelected }) => (
  <Select
    options={options}
    value={selected}
    onChange={e => setSelected(e as Option)}
    styles={selectStyles}
  />
);

export default StyledSelect;
