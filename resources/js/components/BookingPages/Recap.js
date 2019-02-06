import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Card, ButtonGroup } from "react-bootstrap";
import "./Booking.css";

class Recap extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Brk8rQnGIa_LRovCmgPmjE9wySCZB7xE5xSC00Z_yFY3Nugx"
                />
                <Card.Body>
                  <Card.Title>Placeholder</Card.Title>
                  <Card.Text>Selected car photo </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <h2>Details for the ride </h2>
              <div> <p>origin={this.state.origin} </p> </div>
              <div> <p>destination={this.state.destination} </p> </div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  Posuere sollicitudin aliquam ultrices sagittis.
                  Tincidunt tortor aliquam nulla facilisi.
              </p>

              <ButtonGroup size="sm">
                <Button variant="secondary">
                  Edit Details
                </Button>
                <Button variant="secondary">
                  Cancel 
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Recap;
