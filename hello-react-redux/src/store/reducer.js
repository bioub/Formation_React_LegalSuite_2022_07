import { createReducer } from '@reduxjs/toolkit';
import {
  decrement,
  increment,
  todosAdd,
  todosDelete,
  todosNewTodoChange,
} from './actions.js';

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

export const countReducer = createReducer(initialState.count, {
  [increment]: (state, action) => state + (action.payload ?? 1),
  [decrement]: (state, action) => state - (action.payload ?? 1),
});

export const todosReducer = createReducer(initialState.todos, (builder) => {
  // builder.addCase(todosAdd.type, (state, action) => ({
  //   ...state,
  //   items: [...state.items, {}],
  // }));
  builder
    .addCase(todosAdd, (state, action) => {
      // redux toolkit va traduire cette en un nouvel objet
      // et un nouveau table
      state.items.push(action.payload);
      return state;
    })
    .addCase(todosNewTodoChange, (state, action) => {
      state.newTodo = action.payload;
      return state;
    })
    .addCase(todosDelete, (state, action) => {
      const index = state.items.findIndex((item) => action.payload._id === item._id);
      state.items.splice(index, 1);
      return state;
    });
});

export const reducer = {
  count: countReducer,
  todos: todosReducer,
};
