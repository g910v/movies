import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import { SimpleButton } from '../../../shared/ui';

const BackIcon = styled(BiExit)`
  transform: scale(-1, 1);
`;

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SimpleButton onClick={() => navigate(-1)} icon={<BackIcon style={{ fontSize: '1.7rem' }} />} />
  );
};

export default memo(BackButton);
