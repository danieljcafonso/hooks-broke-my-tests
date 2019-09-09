import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter'

describe('Counter', () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    const props = {
        counter: 0,
        increment,
        decrement,
    }
    test('should render Counter', () => {
        const component = shallow(<Counter {...props} />)
        expect(component).toMatchSnapshot();
    });


    test('h2 should have default value', () => {
        const component = shallow(<Counter {...props} />)
        expect(component.state('counter')).toBe(0)
    });

    test('incrementButton should have default value', () => {
        const component = shallow(<Counter {...props} />)
        expect(component.find('.incrementButton').text().trim()).toBe("+1")
    });

    test('decrementButton should have default value', () => {
        const component = shallow(<Counter {...props} />)
        expect(component.find('.decrementButton').text().trim()).toBe("-1")
    });

    test('should call increment button onClick ', () => {
        const component = shallow(<Counter {...props} />)
        component.instance().increment = increment;
        component.instance().forceUpdate()
        component.find('.incrementButton').simulate('click')
        expect(increment).toHaveBeenCalledTimes(1)
    });

    test('should increment on increment button click ', () => {
        const component = shallow(<Counter {...props} />)
        component.find('.incrementButton').simulate('click')
        expect(component.state('counter')).toBe(1)
    });

    test('should call decrement button onClick ', () => {
        const component = shallow(<Counter {...props} />)
        component.instance().decrement = decrement;
        component.instance().forceUpdate()
        component.find('.decrementButton').simulate('click')
        expect(decrement).toHaveBeenCalledTimes(1)
    });

    test('should decrement on decrement button click ', () => {
        const component = shallow(<Counter {...props} />)
        component.find('.decrementButton').simulate('click')
        expect(component.state('counter')).toBe(-1)
    });
    test('counter should be 0 ', () => {
        const component = shallow(<Counter {...props} />)
        expect(component.state().counter).toBe(0)
    });

    test('h2 value should change on state change ', () => {
        const component = shallow(<Counter {...props} />)
        component.setState({counter: 1})
        expect(component.state().counter).toBe(1)
        expect(component.find('h2').text()).toBe("1")
    });
});