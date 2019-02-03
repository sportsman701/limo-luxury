import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import './Booking.css';
import Map from '../Map';

export default class Booking extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <Jumbotron>
          <Row>
            <Col>
              <Form>

                <Form.Group controlId="start">
                  <Form.Label>Pick Up / Drop Off Information</Form.Label>
                  <Form.Control
                    type="text"
                    name="start"
                    placeholder="Pick up"
                    value={this.props.origin}
                    // onChange={this.handleChange.bind(this)} 
                  />
                </Form.Group>

                <Form.Group controlId="end">
                  <Form.Control
                    type="text"
                    name="end"
                    placeholder="Drop off"
                    value={this.props.destination}
                    // onChange={this.handleChange.bind(this)} 
                  />
                </Form.Group>

                <br />
                <br />
                
                <Form.Row>
                  <Form.Group controlId="date">
                    <Form.Control
                      type="text"
                      name="date"
                      placeholder="Date"
                      value={this.props.xfrDate}
                      // onChange={this.handleChange.bind(this)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="time">
                    <Form.Control
                      type="text"
                      name="time"
                      placeholder="Time"
                      value={this.props.xfrTime}
                      // onChange={this.handleChange.bind(this)} 
                    />
                  </Form.Group>
                </Form.Row>

                <br></br>
                <br></br>

                <Button variant="primary" type="submit" value="Submit">
                  Continue
                </Button>
              </Form>
            </Col>

            <Col>
              <Map
                origin={this.props.origin}
                destination={this.props.destination}
              />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  };
};