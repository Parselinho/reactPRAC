import React, { useRef, useState, useEffect } from 'react'
import TodoList from './TodoList'

function Input() {
  const [tasks, setTasks] = useState(() => {
    // Get the tasks from local storage or use an empty array if there's none
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editedTask, setEditedTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const inputRef = useRef();

  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now(), text: inputRef.current.value }]);
    inputRef.current.value = '';
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleRemoveAllTasks = () => {
    setTasks([]);
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setEditedTaskText(task.text);
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditedTask(null);
    setEditedTaskText('');
  };
  // Update local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Todo List</h5>
              <div className="input-group mb-3">
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control"
                  placeholder="Enter a task"
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleAddTask}
                >
                  Add Task
                </button>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-danger mb-3"
                  onClick={handleRemoveAllTasks}
                >
                  Remove All Tasks
                </button>
              </div>
              <TodoList                 tasks={tasks}
                onRemoveTask={handleRemoveTask}
                onEditTask={handleEditTask}
                editedTask={editedTask}
                editedTaskText={editedTaskText}
                onEditTaskTextChange={(e) => setEditedTaskText(e.target.value)}
                onUpdateTask={handleUpdateTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;