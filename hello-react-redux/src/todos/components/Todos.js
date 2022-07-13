import TodoFormContainer from "../containers/TodoFormContainer";
import TodosListContainer from "../containers/TodosListContainer";

function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodosListContainer />
    </div>
  );
}

export default Todos;
