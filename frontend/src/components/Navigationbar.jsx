import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import api from "../api"
import { UserContext } from '../components/UserContext';


function Navigationbar() {
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const {points,setPoints}=useContext(UserContext);

  useEffect(()=>{
    get_user_points();
  },[]);  

  const get_user_points=()=>{
    api
            .get("/api/current/user/")
            .then((res) => {
                if (res) setCurrentUser(res.data);
                else alert("User not found");
            })
            .catch((err) => alert(err));
    api
            .get("/api/current/points/")
            .then((res) => {
                if (res) setPoints(res.data[0].points);
                else alert("Failed to retrieve points");
            })
            .catch((err) => alert(err));
  }

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
            <Navbar.Text className='me-3'>Score : {points}</Navbar.Text>
            <NavDropdown title={`User : ${currentUser.username}`} id="basic-nav-dropdown">
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigationbar;
