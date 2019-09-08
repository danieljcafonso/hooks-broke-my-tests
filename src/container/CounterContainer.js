import { connect } from "react-redux";
import Counter from "../components/Counter";
import { counterActions } from "../actions/counterActions";

export const mapStateToProps = state => {
	const counter = state.counter;
	return { counter };
}

export const  mapDispatchToProps = dispatch =>{
	return {
		increment: function() {
			dispatch(counterActions.INCREMENT());
		},
		decrement: function() {
			dispatch(counterActions.DECREMENT());
		}
	};
}

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default CounterContainer;
