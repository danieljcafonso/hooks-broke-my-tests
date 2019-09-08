  
  import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT
  } from '../constants/counterConstants'

  export const counterActions = {
    INCREMENT,
    DECREMENT
  };
  
  function INCREMENT() {
    return { type: COUNTER_INCREMENT };
  }
  
  function DECREMENT() {
    return { type: COUNTER_DECREMENT };
  }
  
 