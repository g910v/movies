import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import baseTheme, { textGradient } from '../../../shared/styles/theme';

const BackIcon = styled(BiChevronLeft)`
  font-size: 1.25rem;
  margin-top: 0.15rem;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  width: fit-content;
  cursor: pointer;
  &:hover{
    color: ${baseTheme.colors.yellow};
    ${textGradient}
  }
`;

const BackButtonContainer = styled.div`
  max-width: 1700px;
  padding: 0 1rem;
  width: calc(100% - 2rem);
`;

const BackButtonText: React.FC = () => {
  const navigate = useNavigate();
  return (
    <BackButtonContainer onClick={() => navigate(-1)}>
      <BackButton>
        <BackIcon />
        назад
      </BackButton>
    </BackButtonContainer>
  );
};

export default memo(BackButtonText);
