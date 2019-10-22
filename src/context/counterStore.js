import { useReducer } from 'react';
import counterReducer from './counterReducer';
import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT
} from "./counterTypes"

export const CounterStore = () => {
  const initialState = {
    counter: 0
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment =  () => {
    dispatch({ type: COUNTER_INCREMENT});
  };

  const decrement =  () => {
    dispatch({ type: COUNTER_DECREMENT});
  };

  return {
    counter: state.counter,
    increment,
    decrement
  };
};

export default CounterStore;
