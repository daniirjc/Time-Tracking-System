import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, NavbarComponent, Navbar } from 'react-bootstrap';

export default class MyNavbar extends Component {
  render() {
  return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">TTS</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="Home">Home</NavItem>
              <NavItem eventKey={2} href="MyProjects">My Projects</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="Logout">Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
