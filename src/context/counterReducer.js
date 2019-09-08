import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT
} from "./counterTypes"

export default (state, { type }) => {
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
