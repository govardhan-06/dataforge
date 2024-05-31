import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigationbar({name}) {
  name="heyy"
  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary mb-5">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="MIC Logo"
              src="/src/static/92003285.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            DataForge 
          </Navbar.Brand>
          {/* User based restriction need to be applied here */}
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/addCTF" className='me-3'>Create</Nav.Link>
            <NavDropdown title={`User : ${name}`} id="basic-nav-dropdown">
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigationbar;
