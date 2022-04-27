import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className="mx-3" to="/home">
        Home
      </Link> 
      <Link className="mx-3" to="/about">
        about
      </Link>
      <Link className="mx-3" to="/services">
        Service
      </Link>
      <Link className="mx-3" to="/private-route">
        Private route
      </Link>
      <Link className="mx-3" to="/private-route1">
        Private route 1
      </Link>
      <Link className="mx-3" to="/login">
        Login
      </Link>
      <Link className="mx-3" to="/register">
        Register
      </Link>
    </div>
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: "100px" }}
    //         navbarScroll
    //       ></Nav>

    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
