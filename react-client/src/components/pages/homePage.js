import React, { Component } from 'react';
import logo from '../../assets/images/flying-fish.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class HomePage extends Component {
  render() {
    return (
      <Container>
        {/*<img className="floatingLogo" src={logo}/>*/}
        <Row className="homeHeaders">
          <Col md>
            <h1 className="leftHomeHeader">Your <br/>Website <br/>Here.</h1>
          </Col>
          <Col md>
            <h1 >something else</h1>
          </Col>
        </Row>

          <Row className="cubes">
            <Col className="cube cube1">
              <div className="cube_side cube__face--front red_background">Our Vision</div>
              <div className="cube_side cube__face--back">back</div>
              <div className="cube_side cube__face--right">right</div>
              <div className="cube_side cube__face--left yellow_background">left</div>
              <div className="cube_side cube__face--top">top</div>
              <div className="cube_side cube__face--bottom yellow_background">is Dope.</div>
            </Col>
            <Col className="cube cube2">
              <div className="cube_side cube__face--front green_background">Our Names</div>
              <div className="cube_side cube__face--back">back</div>
              <div className="cube_side cube__face--right ">right</div>
              <div className="cube_side cube__face--left">left</div>
              <div className="cube_side cube__face--top purple_background">are Abel and Brady.</div>
              <div className="cube_side cube__face--bottom">bottom</div>
            </Col>
            <Col className="cube cube3">
              <div className="cube_side cube__face--front blue_background">Our Prices</div>
              <div className="cube_side cube__face--back">back</div>
              <div className="cube_side cube__face--right">right</div>
              <div className="cube_side cube__face--left red_background">are Unbeatable.</div>
              <div className="cube_side cube__face--top">top</div>
              <div className="cube_side cube__face--bottom red_background">bottom</div>
            </Col>
        </Row>

      </Container>
    )
  }
}

export default HomePage;