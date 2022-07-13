import { createAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { fetchTodos } from '../todos/api';

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

export const todosFetchSuccess = createAction('todos/fetchSuccess');

// export const todosFetch = () => {
//   return async (dispatch) => {
//     try {
//       // dispatch(todosFetchRequested()); // loading: true
//       const todos = await fetchTodos();
//       dispatch(todosFetchSuccess(todos)) // loading: false
//     } catch(err) {
//       // dispatch(todosFetchError(err)); // loading: false
//     }
//   }
// }

export const todosFetch = createAsyncThunk('todos/fetch', async () => {
  const todos = await fetchTodos();
  return todos;
})
