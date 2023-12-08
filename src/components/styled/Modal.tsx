import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { BiX, BiArea } from 'react-icons/bi';
import baseTheme from '../../styles/theme';

interface Props {
  children: ReactNode,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const Window = styled.div<{ maxiSize: boolean }>`
  position: fixed;
  top: ${props => (props.maxiSize ? '0px' : '25%')};
  left: ${props => (props.maxiSize ? '0px' : '25%')};
  width: ${props => (props.maxiSize ? 'calc(100% - 2rem)' : '50%')};
  height: ${props => (props.maxiSize ? 'calc(100% - 2rem)' : '50%')};
  z-index: 12;
  background: ${baseTheme.colors.bgLighter};
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
`;

const Icon = styled.div`
  border-radius: 50%;
  padding: 0.5rem;
  background: ${baseTheme.colors.bgLighter};
  display: flex;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${baseTheme.colors.mix};
  }
`;

const ExitIcon = styled(Icon)`
  top: 0.1rem;
  right: 0.1rem;
`;

const MaximinIcon = styled(Icon)`
  top: 0.1rem;
  right: 0.35rem;
`;

const Modal: React.FC<Props> = ({ children, visible, setVisible }) => {
  const [maxiSize, setMaxiSize] = useState(false);
  return (
    visible && createPortal(
      <>
        <Mask onClick={() => setVisible(false)} />
        <Window maxiSize={maxiSize}>
          <IconContainer>
            <MaximinIcon onClick={() => setMaxiSize(prev => !prev)}>
              <BiArea />
            </MaximinIcon>
            <ExitIcon onClick={() => setVisible(false)}>
              <BiX />
            </ExitIcon>
          </IconContainer>
          {children}
        </Window>
      </>,
      document.body,
    )
  );
};

export default Modal;
