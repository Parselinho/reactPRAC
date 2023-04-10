import React, { useRef, useState, useEffect } from 'react'
import TodoList from './TodoList'
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4">Todo List</Card.Title>
              <InputGroup className="mb-3">
                <FormControl
                  ref={inputRef}
                  type="text"
                  placeholder="Enter a task"
                />
                <Button variant="outline-primary" onClick={handleAddTask}>
                  Add Task
                </Button>
              </InputGroup>
              <div className="text-center mb-3">
                <Button variant="danger" onClick={handleRemoveAllTasks}>
                  Remove All Tasks
                </Button>
              </div>
              <TodoList
                tasks={tasks}
                onRemoveTask={handleRemoveTask}
                onEditTask={handleEditTask}
                editedTask={editedTask}
                editedTaskText={editedTaskText}
                onEditTaskTextChange={(e) => setEditedTaskText(e.target.value)}
                onUpdateTask={handleUpdateTask}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
  


export default Input;