import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import './Booking.css';
import Map from '../Map';

class Booking extends Component {
  render() {   
    return (
      <Container>
        <br />
        <br />
        <Jumbotron>
          <Row>
            <Col>
              <Form>

                <Form.Group controlId="origin">
                  <Form.Label>Pick Up / Drop Off Information</Form.Label>
                  <Form.Control
                    type="text"
                    name="origin"
                    placeholder="Pick up"
                    value={this.props.origin}
                    onChange={this.props.handleInputChange} 
                  />
                </Form.Group>

                <Form.Group controlId="destination">
                  <Form.Control
                    type="text"
                    name="destination"
                    placeholder="Drop off"
                    value={this.props.destination}
                    onChange={this.props.handleInputChange} 
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
                      onChange={this.props.handleInputChange} 
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="time">
                    <Form.Control
                      type="text"
                      name="time"
                      placeholder="Time"
                      value={this.props.xfrTime}
                      onChange={this.props.handleInputChange} 
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

export default Booking;