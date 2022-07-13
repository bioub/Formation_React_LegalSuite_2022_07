import { useDispatch, useSelector } from "react-redux";
import { todosDelete } from "../../store/actions";
import { todosSelector } from "../../store/selectors";
import TodosList from "../components/TodosList";

function TodosListContainer() {
  const todos = useSelector(todosSelector); // <- subscribe
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(todosDelete(todo));
  };

  return (
    <TodosList todos={todos.items} onDelete={handleDelete} />
  );
}

 export default TodosListContainer;
