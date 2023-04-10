import React from 'react'
import { Button, FormControl } from 'react-bootstrap'; // Import missing Bootstrap components
import './css//Todolist.css';


function TodoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.tasks.map((task, index) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {props.editedTask?.id === task.id ? (
              <div>
                <FormControl
                  type="text"
                  value={props.editedTaskText}
                  onChange={props.onEditTaskTextChange}
                  autoFocus
                />
                <Button
                  className="btn btn-outline-success btn-sm ms-1 white-text"
                  onClick={() => props.onUpdateTask(props.editedTask)}
                >
                  Save
                </Button>
              </div>
            ) : (
              <span>{task.text}</span>
            )}
            <div>
              {props.editedTask?.id === task.id ? null : (
                <Button
                  className="btn btn-outline-secondary btn-sm me-1 white-text"
                  onClick={() => props.onEditTask(task)}
                >
                  Edit
                </Button>
              )}
              <Button
                className="btn btn-outline-danger btn-sm white-text"
                onClick={() => props.onRemoveTask(task.id)}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;