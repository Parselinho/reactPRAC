import React from 'react'

function TodoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.tasks.map((task, index) => (
          <div key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {props.editedTask?.id === task.id ? (
              <div>
                <input
                  type="text"
                  value={props.editedTaskText}
                  onChange={props.onEditTaskTextChange}
                  autoFocus
                />
                <button
                  className="btn btn-outline-success btn-sm ms-1"
                  onClick={() => props.onUpdateTask(props.editedTask)}
                >
                  Save
                </button>
              </div>
            ) : (
              <span>{task.text}</span>
            )}
            <div>
              {props.editedTask?.id === task.id ? null : (
                <button
                  className="btn btn-outline-secondary btn-sm me-1"
                  onClick={() => props.onEditTask(task)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => props.onRemoveTask(task.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;