import "./Todo.css";
import XIcon from "./XIcon";
function Todo(props) {
  function deleteTodo(e) {
    console.log('a',e,props.todo.id);
    props.onDelete(e,props.todo.id);
  }
  return (
    <div className="card">
      <h2 className={props.todo.checked ? "todo disebale" : "todo"}>
        {props.todo.title}
        <div className="flex">
          <input
            type="checkbox"
            id={props.todo.id}
            checked={props.todo.checked}
            onChange={props.onChecked}
          />
          <XIcon onDelete={deleteTodo} />
        </div>
      </h2>
    </div>
  );
}
export default Todo;
