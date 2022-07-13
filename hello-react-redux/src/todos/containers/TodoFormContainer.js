import { useDispatch, useSelector } from "react-redux";
import { todosAdd, todosNewTodoChange } from "../../store/actions";
import { todosSelector } from "../../store/selectors";
import TodoForm from "../components/TodoForm";

function TodoFormContainer() {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleNewTodoChange = (newTodo) => {
    dispatch(todosNewTodoChange(newTodo));
  };

  const handleAdd = () => {
    dispatch(todosAdd(todos.newTodo));
  };

  return (
    <TodoForm newTodo={todos.newTodo} onNewTodoChange={handleNewTodoChange} onAdd={handleAdd} />
  );
}

 export default TodoFormContainer;
