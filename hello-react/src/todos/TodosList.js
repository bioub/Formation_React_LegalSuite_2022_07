import TodoItem from "./TodoItem";

function TodosList({todos, onDelete}) {
  return (
    <div className="TodosList">
      {todos.map((todo) => <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />)}
    </div>
  );
}

 export default TodosList;
