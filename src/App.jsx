import { useState, useEffect, Component } from "react";
import Todo from "./Todo.jsx";
import "./App.css";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "aaa", checked: false, time: +new Date().getTime() },
        {
          id: 2,
          title: "bbbb",
          checked: false,
          time: +new Date().getTime() - 50,
        },
        {
          id: 3,
          title: "ccc",
          checked: false,
          time: +new Date().getTime() + 50,
        },
      ],
    };
    if (!localStorage.getItem("todos")) localStorage.setItem("todos", "[]");
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
    let a = this.state.todos;
    a.sort((a, b) => {
      return b.time - a.time;
    });
    this.setState({ todos: a });

  }

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
  };

  render() {
    if (this.state.todos.length == 0) {
      return (
        <div className="center">
          <h1 className="title">چیزی یافت نشد</h1>
        </div>
      );
    }
    return (
      <section>
        <div className="title">TODOS</div>
        <div className="todo-list">
          {this.state.todos.map((r) => {
            if (r.checked == false)
              return <Todo todo={r} key={r.id} onChecked={this.checking} />;
          })}
          <div className="line"></div>
          {this.state.todos.map((r) => {
            if (r.checked == true)
              return <Todo todo={r} key={r.id} onChecked={this.checking} />;
          })}
        </div>
      </section>
    );
  }
}

export default App;
