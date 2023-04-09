import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import AppTodo from './todoList/AppTodo';
import Countries from './countries/Countries';

function App() {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setNavCollapsed(!navCollapsed);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">My App</NavLink>
        <button className="navbar-toggler" type="button" onClick={handleNavToggle} aria-controls="navbarNav" aria-expanded={!navCollapsed} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${navCollapsed ? '' : ' show'}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/todolist">Todo List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/countries">Countries</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid mt-3">
        <Routes>
          <Route path="/" element={<h1>Welcome to my app!</h1>} />
          <Route path="/todolist" element={<AppTodo />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;