import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      todos: "",
      error: false,
    };
  }
  submit = (event) => {
    event.preventDefault();
    // console.log(this.state.todos);
    // this.props.addTodo(this.state.todos);

    if (this.state.todos.length > 0) {
      if (this.props.edit) {
        this.props.updateTodo(this.props.editData.index, this.state.todos);
      } else {
        this.props.addTodo(this.state.todos);
      }

      this.setState({
        todos: "",
      });
    } else {
      this.setState({ error: true });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.editData.index !== prevProps.editData.index) {
      // console.log(this.props);
      this.setState({ todos: this.props.editData.data });
    }
  }
  render() {
    return (
      <form className="row g-3" onSubmit={this.submit}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            value={this.state.todos}
            onChange={(event) =>
              this.setState({
                todos: event.target.value,
                error: false, //iska use isliye kiya gya hai kuki jab  ek bar error msg print ho jaega tab hatega nhi wo kuki hatane ka koi validatioon nhi hai usme
              })
            }
          />

          {this.state.error && (
            <p className="text-danger">Please enter todo. </p>
          )}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            {this.props.edit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    );
  }
}
