import {mapStateToProps, mapDispatchToProps} from '../CounterContainer'


const state = {
    counter: 0
}
describe('mapStateToProps', () => {
    test('should have the correct state props mapped', () => {
      const expectedResult = {
        counter: state.counter,
      };
      const result = mapStateToProps(state);

      expect(result).toEqual(expectedResult);
    });

  }); 

  describe('mapDispatchToProps', () => {


    it('should have the new props mapped', () => {
      const result = mapDispatchToProps();

      expect(result.increment).not.toBe(undefined);
    });
})
