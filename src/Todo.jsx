import "./Todo.css";

function Todo(props) {
  return (
    <div className="card">
      <h2 className={props.todo.checked ? "todo disebale" : "todo"}>
        {props.todo.title}
        <input
          type="checkbox"
          id={props.todo.id}
          checked={props.todo.checked}
          onChange={props.onChecked}
        />
      </h2>
    </div>
  );
}
export default Todo;
