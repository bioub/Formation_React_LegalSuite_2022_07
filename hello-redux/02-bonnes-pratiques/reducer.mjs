import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./constants.mjs";

const initialState = {
  count: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + action.step,
      };
    case COUNTER_DECREMENT:
      return {
        count: state.count - action.step,
      };
    default:
      return state;
  }
}
