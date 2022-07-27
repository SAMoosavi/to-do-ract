import "./NewTodo.css";
import { useRef } from "react";

function NewTodo(props) {
  const text = useRef("");

  function submit(element) {
    element.preventDefault();
    props.onSubmit(text.current.value);
  }

  return (
    <div className="center">
      <form className="card" onSubmit={submit}>
        <input type="text" name="todo" id="todo" ref={text} className="input" />
        <div className="btn-group">
          <button className="btn" type="submit" onSubmit={submit}>
            create
          </button>
          <button className="btn cansel" type="button" onClick={props.onCansle}>
            cansel
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewTodo;
