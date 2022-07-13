# Exercices

## Actions

Dans `store/action.js` créer 2 nouvelles actions

Une qui permettra d'ajouter une todo au tableau (ex: `todos/add`)

Une qui permettra de mettre à jour la valeur saisie dans le champs (ex: `todos/newTodoChange`)

Pas besoin de prévoir de valeur par défaut.

## Reducers

Dans `store/reducer.js` traiter ces 2 actions :

Sur `todos/add` ajouter payload au tableau (avec redux/toolkit on peut appeler la méthode `.push` directement)

Sur `todos/newTodoChange` mettre à jour la clé `newTodo` du state (avec redux/toolkit pas besoin de cloner le state)

Avec l'extension Redux DevTools, utiliser le dispatcher (icone `>_`) et tester qu'en dispatchant ces 2 actions le state ai la forme souhaitée :

```
{
  type: 'todos/add',
  payload: {
    _id: '123abc',
    title: 'ABCDEF',
    completed: false
  }
}
```

```
{
  type: 'todos/newTodoChange',
  payload: 'Acheter du pain',
}
```

## Selecteurs

Ecrire un selecteur dans `store/selectors.js` qui retourne la clé `todos` du state

## Conteneurs

Créer un dossier `containers` dans `src/todos` et y créer 2 containers : `TodosListContainer` et `TodoFormContainer`

`TodosListContainer` doit passer la liste de todos à `TodosList` en utilisant le selecteur précédemment écrit

`TodoFormContainer` doit :

- passer la valeur saisie à `TodoForm` en utilisant le selecteur précédemment écrit
- passer une fonction à `TodoForm` qui fera le `dispatch` de l'action `todos/add` (via l'action creator créé en premier exercice, il faudra créer l'objet ici `{_id: Math.random(), title: 'La valeur saisie', completed: false}`)
- passer une fonction à `TodoForm` qui fera le `dispatch` de l'action `todos/newTodoChange` (via l'action creator créé en premier exercice)

Utiliser ensuite ces conteneurs à la place de tout ce qui avait été fait dans `Todos`.
