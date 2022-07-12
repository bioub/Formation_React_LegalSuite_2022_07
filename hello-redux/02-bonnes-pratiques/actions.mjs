import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./constants.mjs";

export function increment(step = 1) {
  return {
    type: COUNTER_INCREMENT,
    step,
  }
}

export function decrement(step = 1) {
  return {
    type: COUNTER_DECREMENT,
    step,
  }
}
