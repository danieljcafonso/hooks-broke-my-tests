import React, { createContext, useContext } from 'react';
import counterStore from './counterStore'

const CounterContext = createContext();

export const useCounterContext = () => {
  const store = useContext(CounterContext);

  if (!store) {
    throw new Error(
      'Cannot use `useCounterContext` outside of a CounterProvider'
    );
  }

  return store;
};

export const CounterProvider = children => {
    return <CounterContext.Provider value={counterStore()} {...children} />;
  };

