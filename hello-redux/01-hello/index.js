const redux = require('redux');

const initialState = {
  count: 0,
};

// reducer doit être pure
// - prédictive, appelé avec les params données
// le retour est toujours le même
// - ne doit pas avoir de side-effect (pas d'API externe,
// requete HTTP, appel à base de données)
// - ne doit pas modifier ses params
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment':
      return {
        count: state.count + 1,
      };
    case 'counter/decrement':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = redux.legacy_createStore(reducer);

console.log('state initial', store.getState());

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch({ type: 'counter/increment' });
store.dispatch({ type: 'counter/increment' });
store.dispatch({ type: 'counter/increment' });
store.dispatch({ type: 'counter/decrement' });

// document.addEventListener('click', () => {});
// document.dispatchEvent(new MouseEvent('click'));
