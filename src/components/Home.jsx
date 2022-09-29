/** @format */

import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export default class Home extends Component {
  state = {
    movieTitle: "Man of Steel",
    showMovieSelection: true,
  };

  changeMovie = (e) => {
    this.setState({
      movieTitle: e.target.value,
      showMovieSelection: this.state.showMovieSelection,
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label style={{ color: "white" }}>
                CHOOSE YOUR MOVIE
              </Form.Label>
              <Form.Control
                as="select"
                value={this.state.movieTitle}
                onChange={this.changeMovie}
              >
                <option value={"Batman Begins"}>Batman Begins</option>
                <option value={"Wonder Woman"}>Wonder Woman</option>
                <option value={"Man of Steel"}>Man of Steel</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <div>
              {/* {this.state.showMovieSelection && (
                <Movie selectedMovie={this.state.movieTitle} />
              )} */}
              <Button
                variant="success"
                onClick={() =>
                  this.setState({
                    showMovieSelection: !this.state.showMovieSelection,
                  })
                }
              >
                Click Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
