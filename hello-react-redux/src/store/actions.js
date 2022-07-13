import { createAction, nanoid } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment', (step = 1) => ({
  payload: step,
}));
export const decrement = createAction('counter/decrement', (step = 1) => ({
  payload: step,
}));

export const todosAdd = createAction('todos/add', (title) => ({
  payload: {
    _id: nanoid(),
    title,
    completed: false
  }
}));
export const todosNewTodoChange = createAction('todos/newTodoChange');
export const todosDelete = createAction('todos/delete');
