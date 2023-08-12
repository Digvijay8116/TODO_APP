import React, { Component } from "react";
import Input from "./Input";
import List from "./List";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [], // isko list ke andar props ke through transfer kiya gya hai
      editData: {
        index: "",
        data: "",
      },
      edit: false,
    };
  }

  addTodo = (todo) => {
    // console.log(todo);
    let prevtodos = this.state.todos;
    prevtodos.push(todo);
    console.log(prevtodos);
    // this.state.todos.push(todo);  this will not giv any error

    console.log(this.state.todos);

    this.setState({
      todos: prevtodos,
      // todos : this.state.todos.push(todo) this will give a run time error
    });

    // this.setState({todos : [...this.state.todos, todo]})  this one line o f code can reaplce all the above code and make that code in one line.  see vide to understande the code.]
  };
  deleteTodos = (todos) => {
    console.log(todos);

    let filterTodos = this.state.todos.filter(
      (value, index) => value !== todos
    );

    console.log(filterTodos);
    this.setState({
      // todos : filterTodos, this line qill also give the same result that the below lone will give
      todos: [...filterTodos],
    });
  };

  editTodos = (index, data) => {
    // console.log(index,data);
    this.setState({
      editData: {
        index,
        data,
      },
      edit: true,
    });
  };

  updateTodo = (index, data) => {
    this.state.todos.splice(index, 1, data); //this is use to update the data

    this.setState({
      todos: this.state.todos,
      editData: {
        index: "",
        data: "",
      },
      edit: false,
    });
  };
  render() {
    return (
      <div className="container mt-4 ">
        <Input
          addTodo={this.addTodo}
          editData={this.state.editData}
          edit={this.state.edit}
          updateTodo={this.updateTodo}
        />
        <List
          todos={this.state.todos}
          deleteTodos={this.deleteTodos}
          editTodos={this.editTodos}
        />
      </div>
    );
  }
}
