import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Props {
  children: React.ReactElement[],
}

const ContainerCarousel = styled.div`
  display: flex;
  height: max-content;
`;

const ContainerHidden = styled.div`
  overflow-x: hidden;
  height: max-content;
  margin: 0 0.5rem;
`;

const ContainerList = styled.div<{ translate: number}>`
  width: fit-content;
  display: flex;
  height: max-content;
  column-gap: 1rem;
  transform: translateX(-${props => props.translate}px);
  transition-duration: 0.5s;
  padding: 0 0.5rem;
`;

const CarouselButton = styled.div<{ disabled: boolean }>`
  width: 4rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background: rgba(255, 255, 255, 0.05);
  &:hover {
    background: ${props => (props.disabled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)')};
  }
`;

const transition = 155;

const Carousel: React.FC<Props> = ({ children }) => {
  const [translate, setTranslate] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const view = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listWidth = Math.round(list.current?.getBoundingClientRect().width ?? 0);
    const viewWidth = Math.round(view.current?.getBoundingClientRect().width ?? 0);
    setMaxTranslate(listWidth - viewWidth);
  }, []);

  return (
    <ContainerCarousel>
      <CarouselButton
        disabled={!translate}
        onClick={() => {
          if (translate) {
            setTranslate(prev => {
              if (prev - transition < 0) {
                return 0;
              }
              return prev - transition;
            });
          }
        }}
      >
        <BiChevronLeft />
      </CarouselButton>
      <ContainerHidden ref={view}>
        <ContainerList ref={list} translate={translate}>
          {children}
        </ContainerList>
      </ContainerHidden>
      <CarouselButton
        disabled={maxTranslate <= translate}
        onClick={() => {
          if (maxTranslate > translate) {
            setTranslate(prev => {
              if (prev + transition > maxTranslate) {
                return maxTranslate;
              }
              return prev + transition;
            });
          }
        }}
      >
        <BiChevronRight />
      </CarouselButton>
    </ContainerCarousel>
  );
};

export default Carousel;
