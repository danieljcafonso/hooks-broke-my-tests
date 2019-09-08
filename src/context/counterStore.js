/*
 * Talkdesk Confidential
 *
 * Copyright (C) Talkdesk Inc. 2019
 *
 * The source code for this program is not published or otherwise divested
 * of its trade secrets, irrespective of what has been deposited with the
 * U.S. Copyright Office. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
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
