import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Book.css";
import ReactDOM from 'react-dom';
import Map from './components/Map.js'


export default class Book extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <Jumbotron>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Pick Up / Drop Off Information</Form.Label>
                <Form.Control placeholder="Pick up" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Control placeholder="Drop off" />
              </Form.Group>

                <br />
                <br />
                <Form.Row>
                <Form.Group controlId="formGridDate">
                  <Form.Control placeholder="Date" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTime">
                  <Form.Control placeholder="Time" />
                </Form.Group>
                </Form.Row>

              <br></br>
              <br></br>
              
              <Button variant="primary" type="submit">
                Continue
              </Button>

            </Form>
          </Col>

          <Col>
          <div class="map">
           Google map goes here
           
          </div>

          

          </Col>
        </Row>
        </Jumbotron>
      </Container>
    );
  }
}

if (document.getElementById('book')) {
  ReactDOM.render(<Book />, document.getElementById('book'));
}
