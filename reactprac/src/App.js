import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './Home';
import AppTodo from './todoList/AppTodo';
import Countries from './countries/Countries';
import SportOddsApp from './sportodds/SportOddsApp';
import PhotoApp from './gallery/PhotoApp';
// import TrainingApp from './training/TrainingApp';

function App() {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setNavCollapsed(!navCollapsed);
  };

  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <h1 className="text-primary">My App</h1>
          </NavLink>
          <Navbar.Toggle onClick={handleNavToggle} aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className={`justify-content-end${navCollapsed ? ' collapse' : ''}`}>
            <Nav>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/todolist">Todo List</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/countries">Countries</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/sports">Sports Odds</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/gallery">Gallery</NavLink>
              {/* <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/trainingapp">Training Site</NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="display-4 mb-4">Welcome to my app!</h1>
              <p className="lead">
                This is a sample React app that showcases the use of Bootstrap and React Bootstrap to create beautiful and responsive user interfaces.
              </p>
              <p>
                Feel free to explore the app by navigating through the links in the navbar.
              </p>
            </>
          } />
          <Route index element={<Home />} />
          <Route path="/todolist" element={<AppTodo />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/sports" element={<SportOddsApp />} />
          <Route path="/gallery" element={<PhotoApp />} />
          {/* <Route path="/trainingapp" element={<TrainingApp />} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
