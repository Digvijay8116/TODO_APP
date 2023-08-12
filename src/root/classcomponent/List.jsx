import React, { Component } from "react";

export default class List extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    return (
      <ul className="list-group">
        {/* the code below is conditional rendering in this the data is dispplayed in the ui
        
        if you use curly braces here then you have to use return */}
        {this.props.todos.length > 0 ? (
          this.props.todos.map((value, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              <div>{value}</div>

              <div>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => this.props.editTodos(index, value)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.props.deleteTodos(value)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">NO todo </li>
        )}
      </ul>
    );
  }
}
