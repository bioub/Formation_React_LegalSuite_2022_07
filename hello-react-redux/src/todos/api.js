export async function fetchTodos() {
  const res = await fetch('http://localhost:4000/api/todos');
  const todos = await res.json();
  return todos;
}

// L'appel :
// fetchTodos().then((todos) => {})
// const todos = await fetchTodos();
