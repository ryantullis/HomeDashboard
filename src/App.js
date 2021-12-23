import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RyanTullis.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="WebUI's" id="basic-nav-dropdown">
              <NavDropdown.Item href="/radarr">Radarr</NavDropdown.Item>
              <NavDropdown.Item href="/sonarr">Sonarr</NavDropdown.Item>
              <NavDropdown.Item href="/bazarr">Bazarr</NavDropdown.Item>
              <NavDropdown.Item href="/jackett">Jackett</NavDropdown.Item>
              <NavDropdown.Item href="/pihole">Pihole</NavDropdown.Item>
              <NavDropdown.Item href="/tautulli">Tautulli</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
