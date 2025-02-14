import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="ligh" expand="lg">
        <div className="container">
          <Navbar.Brand className='text-light' href="#">Portfo<span className="highlight">lio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="custom-toggle" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto ">
              <Nav.Link className='nav-name text-light' href="#header">Home</Nav.Link>
              <Nav.Link className='nav-name text-light' href="#about">About Me</Nav.Link>
              <Nav.Link className='nav-name text-light' href="#text">Projects</Nav.Link>
              <Nav.Link className='nav-name text-light' href="#skills">Skills</Nav.Link>
              <Nav.Link className='nav-name text-light' href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Button variant="primary" className="subscribe-btn">Subscribe</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div id="header">
        <div className="intro-text text-center">
          <h1>Hello, my name is <span className="highlight">Arjun E J</span></h1>
          <p>I'm a Web Developer</p>
          <Form className="email-form d-inline-block">
            <FormControl type="email" placeholder="Enter Your Email" />
            <Button id="talk-btn" type="submit" className="btn-2 btn-primary mt-2 px-3">Let's Talk</Button>
          </Form>
        </div>
      </div>
    </header>
  );
};

export default Header;