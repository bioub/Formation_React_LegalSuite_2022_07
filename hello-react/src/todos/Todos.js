import { useEffect, useState } from 'react';
import { fetchTodos } from './api';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

function Todos() {
  const [todos, setTodos] = useState([
    // { _id: 123, title: 'ABC', completed: false },
    // { _id: 345, title: 'DEF', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('Acheter d');

  function handleAdd() {
    setTodos([
      ...todos,
      {
        _id: Math.random(),
        title: newTodo,
        completed: false,
      },
    ]);
  }

  function handleDelete(todo) {
  }

  useEffect(() => {

    (async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    })();

    return () => {};
  }, []);

  return (
    <div className="Todos">
      <TodoForm
        newTodo={newTodo}
        onNewTodoChange={setNewTodo}
        onAdd={handleAdd}
      />
      <TodosList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
