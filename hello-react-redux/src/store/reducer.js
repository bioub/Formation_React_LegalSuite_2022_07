import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment } from './actions.js';

const initialState = {
  count: 0,
  todos: {
    items: [
      { _id: 123, title: 'ABC', completed: false },
      { _id: 345, title: 'DEF', completed: true },
    ],
    newTodo: 'Acheter d',
  },
};

const countReducer = createReducer(initialState.count, {
  [increment.type]: (state, action) => state + (action.payload ?? 1),
  [decrement.type]: (state, action) => state - (action.payload ?? 1),
});

const todosReducer = createReducer(initialState.todos, (builder) => {
  // builder.addCase(todosAdd.type, (state, action) => ({
  //   ...state,
  //   items: [...state.items, {}],
  // }));
  // builder.addCase(todosAdd.type, (state, action) => {
  //   // redux toolkit va traduire cette en un nouvel objet
  //   // et un nouveau table
  //   state.items.push({});
  // })
});

export const reducer = {
  count: countReducer,
  todos: todosReducer,
};
