import React from 'react';
import { render } from '@testing-library/react';
import {CounterProvider} from '../context/CounterContext'

const customRender = (ui, {  ...options } = {}) => {
  const ProviderWrapper = (props) => {
    return (
    <CounterProvider {...props}/>     
    )
  };
  return render(ui, { wrapper: ProviderWrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
