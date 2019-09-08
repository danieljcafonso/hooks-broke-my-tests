import { createStore } from "redux";
import { counter } from "./reducer/counterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(counter, composeWithDevTools());
