import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = (props) => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log(todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    let sn;
    if (todos.length === 0) {
      sn = 0;
    } else {
      sn = todos[todos.length - 1].sn + 1;
    }
    const newTodo = {
      sn: sn,
      title: title,
      desc: desc,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    // localStorage.setItem("todos", JSON.stringify(todos));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header title="My Todos List" />
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          <Footer />
        </Route>
        <Route exact path="/about">
          <About />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
