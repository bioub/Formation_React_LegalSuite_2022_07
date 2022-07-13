import { countReducer } from './reducer';

test('countReducer increment', () => {
  const state = 10;
  const action = {
    type: 'counter/increment',
  };
  expect(countReducer(state, action)).toBe(11);
});
