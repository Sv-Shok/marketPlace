import { createContext, useContext } from 'react';
import { RootStore } from './RootStore';
import { createPersist } from './utils';

export const createStore = () => {
  const root = RootStore.create();

  const persistor = createPersist(root);

  persistor.rehydrate();
  return root;
};

const MTSContext = createContext(null);

export const { Provider } = MTSContext;

export const useStore = (mapStateToProps) => {
  const store = useContext(MTSContext);

  if (typeof mapStateToProps === 'function') {
    return mapStateToProps(store);
  }

  return store;
};
