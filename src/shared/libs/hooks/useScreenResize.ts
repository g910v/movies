import { useState, useEffect } from 'react';
import { screenSize } from '../../../styles/theme';

const useScreenResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      const target = event.target as Window;
      setWidth(target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenS: width <= screenSize.s,
    isScreenM: width <= screenSize.m && width > screenSize.s,
    isScreenL: width <= screenSize.l && width > screenSize.m,
    isScreenXl: width > screenSize.l,
  };
};

export default useScreenResize;
