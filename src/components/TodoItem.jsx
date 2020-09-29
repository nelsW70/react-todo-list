import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between align-items-baseline my-2">
        <h6 style={{ marginBottom: '0' }}>{title}</h6>
        <div className="todo-icon">
          <span
            role="button"
            className="mx-2 text-success"
            onClick={handleEdit}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            role="button"
            className="mx-2 text-danger"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
