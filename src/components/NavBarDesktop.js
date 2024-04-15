import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./NavBarDesktop.css";
import  React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBarDesktop = () => {

  return (
    <div className="nav-bar-desktop">
      <div className="logo">
        <div className="logodefault2">
          <div className="logodefault-inner" />
          <img className="logosaas-icon2" alt="" src="/logosaas@2x.png" />
        </div>
        <div className="made-by1">made by</div>
        <img
          className="black-horizontal-1-icon1"
          alt=""
          src="/blackhorizontal-1.svg"
        />
      </div>
         
        
      <div className="stack4">
      <Navbar collapseOnSelect expand="lg">
       <Navbar.Toggle  aria-controls="responsive-navbar-nav" className="d-lg-none bg-light" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-light">
              <Nav.Link href="#section1"><p className="n"> About</p></Nav.Link>
              <Nav.Link href="#section2"><p className="n">Features</p></Nav.Link>
              <Nav.Link href="#section2"><p className="n">Customers</p></Nav.Link>
              <Nav.Link href="#section1"><p className="n">Updates</p></Nav.Link>
              <Nav.Link href="#section1"><p className="n">Help</p></Nav.Link> 
            </Nav>
              
          </Navbar.Collapse>
         <Button variant="light">Get for free</Button> 
         </Navbar>
      </div>
   </div>
  );
};

export default NavBarDesktop;
