import { legacy_createStore } from 'redux';
import { reducer } from './reducer.mjs';

export function configureStore() {
  const store = legacy_createStore(reducer);

  // TODO plugins (middleware) à ajouter

  return store;
}
