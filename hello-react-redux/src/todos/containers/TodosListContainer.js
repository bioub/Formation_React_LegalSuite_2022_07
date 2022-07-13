import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosDelete, todosFetch, todosFetchSuccess } from "../../store/actions";
import { todosSelector } from "../../store/selectors";
import { fetchTodos } from "../api";
import TodosList from "../components/TodosList";

function TodosListContainer() {
  const todos = useSelector(todosSelector); // <- subscribe
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(todosDelete(todo));
  };

  useEffect(() => {
    dispatch(todosFetch());

    return () => {};
  }, []);

  if (todos.loading) {
    return <div>Loading...</div>
  }

  return (
    <TodosList todos={todos.items} onDelete={handleDelete} />
  );
}

 export default TodosListContainer;
