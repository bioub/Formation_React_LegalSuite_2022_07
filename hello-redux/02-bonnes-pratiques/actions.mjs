import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./constants.mjs";

export function increment(step = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: step,
  }
}

export function decrement(step = 1) {
  return {
    type: COUNTER_DECREMENT,
    payload: step,
  }
}

// La clé type est obligatoire avec Redux mais le reste est libre
// Convention Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// type + [payload] + [meta]
