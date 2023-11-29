import React, { ReactNode, useContext, useMemo } from 'react';
import RootStore from '../stores/RootStore';

let store: RootStore;

export const StoreContext = React.createContext({} as RootStore);

export const RootStoreProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const root = useMemo<RootStore>(() => {
    if (store) {
      return store;
    }
    return new RootStore();
  }, []);

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

export const useRootStore = (): RootStore => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};
