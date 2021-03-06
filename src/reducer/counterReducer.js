import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT
} from "../constants/counterConstants";

const initialState = {
	counter: 0
};

export function counter(state = initialState, { type }) {
	switch (type) {
		case COUNTER_INCREMENT:
			return {
				counter: state.counter + 1
			};
		case COUNTER_DECREMENT:
			return {
				counter: state.counter - 1
			};

		default:
			return state;
	}
}
