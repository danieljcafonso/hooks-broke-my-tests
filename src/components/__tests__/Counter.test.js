import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "../Counter";

describe("Counter", () => {

	test("should render Counter", () => {
		const { container } = render(<Counter />);
		expect(container).toMatchSnapshot();
	});

	test("should have default value", () => {
		const { container } = render(<Counter />);
		const text = container.firstChild;
		expect(text).toHaveTextContent("0");
	});

	test("incrementButton should have default value", () => {
		const { getByText } = render(<Counter />);
		expect(getByText("+1")).toBeInTheDocument();
	});

	test("decrementButton should have default value", () => {
		const { getByText } = render(<Counter />);
		expect(getByText("-1")).toBeInTheDocument();
	});

	test("should call increment button onClick ", () => {
		const { getByText, container } = render(<Counter />);
		const text = container.firstChild;
		fireEvent.click(getByText("+1"));
		expect(text).toHaveTextContent("1");
	});

	test("should call decrement button onClick ", () => {
		const { getByText, container } = render(<Counter />);
		const text = container.firstChild;
		fireEvent.click(getByText("-1"));
		expect(text).toHaveTextContent("-1");
	});
});
