import { combineReducers } from 'redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './constants.mjs';

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

function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state.count + action.payload;
    case COUNTER_DECREMENT:
      return state.count - action.payload;
    default:
      return state;
  }
}

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case TODOS_ADD:
      return {
        ...state,
        items: [...state.items, {}],
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
})

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
