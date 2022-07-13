import rtk from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { decrement, increment } from './actions.mjs';

const initialState = {
  count: 0,
  // counters: {
  //   '123': {
  //     count: 0
  //   },
  //   '3R5': {
  //     count: 10
  //   },
  // },
  todos: {
    items: [
      { _id: 123, title: 'ABC', completed: false },
      { _id: 345, title: 'DEF', completed: true },
    ],
    newTodo: 'Acheter d',
  },
};

// function countReducer(state = initialState.count, action) {
//   switch (action.type) {
//     case increment.type:
//       return state.count + action.payload;
//     case decrement.type:
//       return state.count - action.payload;
//     default:
//       return state;
//   }
// }
const countReducer = rtk.createReducer(initialState.count, {
  [increment.type]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload,
});

// function todosReducer(state = initialState.todos, action) {
//   switch (action.type) {
//     case TODOS_ADD:
//       return {
//         ...state.todos,
//         items: [...state.todos.items, {}],
//       };
//     default:
//       return state;
//   }
// }
const todosReducer = rtk.createReducer(initialState.todos, (builder) => {
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

// combinerReducer est masqué
export const reducer = {
  count: countReducer,
  todos: todosReducer,
};

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case COUNTER_DECREMENT:
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     // case TODOS_ADD:
//     //   return {
//     //     ...state,
//     //     todos: {
//     //       ...state.todos,
//     //       items: [
//     //         ...state.todos.items,
//     //         {
//     //         }
//     //       ]
//     //     }
//     //   };
//     default:
//       return state;
//   }
// }
