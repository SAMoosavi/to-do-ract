import { Component } from "react";
import Todo from "./Todo.jsx";
import "./App.css";
import NewTodo from "./NewTodo.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("todos")) localStorage.setItem("todos", "[]");
    let a = JSON.parse(localStorage.getItem("todos"));

    a.sort((a, b) => {
      return b.time - a.time;
    });
    this.state = {
      todos: a,
      showNewTodo: false,
    };
  }

  sort = () => {
    let a = this.state.todos;
    a.sort((a, b) => {
      return b.time - a.time;
    });
    this.setState({ todos: a });
  };

  checking = (element) => {
    const id = element.target.id;
    let a = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      this.state.todos[i].id == id
        ? (this.state.todos[i].checked = !this.state.todos[i].checked)
        : "";
      a = [this.state.todos[i], ...a];
    }
    this.setState({ todos: a });
    this.sort();
    this.save(a);
  };

  openNewTodo = (element) => {
    this.setState({ showNewTodo: true });
    element.target.blur();
  };
  closeNewTodo = () => {
    this.setState({ showNewTodo: false });
  };

  deleteTodo = (e,id) => {
    console.log('b',id);
    let a = this.state.todos;
    for (let i = 0; i < this.state.todos.length; i++) {
      a[i].id == id ? a.splice(i, 1) : "";
    }
    this.setState({ todos: a });
    this.sort();
    this.save(a);
  };

  btn = (
    <button className="btn" onClick={this.openNewTodo}>
      Create New Todo
    </button>
  );

  creatNew = (text) => {
    const todo = {
      id: this.state.todos.length,
      title: text,
      checked: false,
      time: +new Date().getTime(),
    };
    this.setState({ todos: [todo, ...this.state.todos], showNewTodo: false });
    this.save([todo, ...this.state.todos]);
  };
  save = (v) => {
    console.log(v);
    localStorage.setItem("todos", JSON.stringify(v));
  };

  render() {
    if (this.state.todos.length == 0) {
      return (
        <section>
          {this.btn}
          {this.state.showNewTodo ? (
            <NewTodo onSubmit={this.creatNew} onCansle={this.closeNewTodo} />
          ) : (
            ""
          )}
          <div className="center">
            <h1 className="title">چیزی یافت نشد</h1>
          </div>
        </section>
      );
    }
    return (
      <section>
        {this.btn}
        {this.state.showNewTodo ? (
          <NewTodo onSubmit={this.creatNew} onCansle={this.closeNewTodo} />
        ) : (
          ""
        )}
        <div className="title">TODOS</div>
        <div className="todo-list">
          {this.state.todos.map((r) => {
            if (r.checked == false)
              return (
                <Todo
                  todo={r}
                  key={r.id}
                  onChecked={this.checking}
                  onDelete={this.deleteTodo}
                />
              );
          })}
          <div className="line"></div>
          {this.state.todos.map((r) => {
            if (r.checked == true)
              return (
                <Todo
                  todo={r}
                  key={r.id}
                  onChecked={this.checking}
                  onDelete={this.deleteTodo}
                />
              );
          })}
        </div>
      </section>
    );
  }
}

export default App;
