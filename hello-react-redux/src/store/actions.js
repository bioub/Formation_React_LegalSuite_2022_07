import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment', (step = 1) => ({
  payload: step,
}));
export const decrement = createAction('counter/decrement', (step = 1) => ({
  payload: step,
}));
