import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/flying-fish.png';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
        <Link to="" className="navbar-brand">
          <div className="fishContainer">
            <img className="fishLogo" src={logo} />
          </div>
          <p className="logoText">Guppy Web Design</p>
        </Link>
        <Link to="about" className="navText">About</Link>
        <Link to="contact" className="navText">Contact</Link>
      </Nav>
    </Container>
      // <header>
      //   <ul id="headerButtons">
      //     <li className="navButton">
      //       <Link to="" className="navLogo"><img className="fishLogo" src={logo} /> <p className="logoText">babel fish web design</p></Link>
      //     </li>
      //     <li className="navButton">
      //       <Link to="about" className="navText">About</Link>
      //     </li>
      //     <li className="navButton">
      //       <Link to="contact" className="navText">Contact</Link>
      //     </li>
      //   </ul>
      // </header>
    )
  }
}

export default NavBar;
