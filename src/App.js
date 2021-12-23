import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
<div className="App">
  <div>
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
  </div>
  <div id="bodywin">
    <p id="name">Ryan Tullis</p>
    <p id="label">Software Engineering</p>
    <SocialIcon url="https://www.linkedin.com/in/ryan-tullis-968948190/" fgColor='white' className='SocialIcons'/>
    <SocialIcon url="https://github.com/ryantullis" fgColor='white' className='SocialIcons'/>
    <SocialIcon url="mailto:ryan@ryantullis.com" fgColor='white' className='SocialIcons'/>
  </div>
</div>
    
    
  );
}

export default App;
