import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import logo from "../../images/logo-koh.jpeg";
const Header = () => {
  /* Navbar  */
  return (
    <header className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${classes.navbar} navbar`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className={classes.logoContainer}>
            <img src={logo} className="d-inline-block align-top" alt="logo" />{" "}
            <span>koh chang club</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`ms-auto ${classes.navLinkContainer} align-items-center`}
            >
              <Nav.Link
                eventKey="1"
                exact
                as={NavLink}
                to="/"
                activeClassName={classes.active}
              >
                หน้าหลัก
              </Nav.Link>
              <NavDropdown title="แพ็คเกต" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  แพ็คเกต 2 วัน 1 คืน
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  แพ็คเกต 4-10 คน
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                eventKey="1"
                exact
                as={NavLink}
                to="about"
                activeClassName={classes.active}
              >
                เกี่ยวกับเรา
              </Nav.Link>
              <Nav.Link
                eventKey="1"
                exact
                as={NavLink}
                to="contact"
                activeClassName={classes.active}
              >
                ติดต่อเรา
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
