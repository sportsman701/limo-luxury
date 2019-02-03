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
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="origin"
                    placeholder="Pickup Location"
                    value={this.props.origin}
                    onChange={this.props.handleInputChange} 
                  />
                </Form.Group>

                <Form.Lable>Drop Off Location</Form.Lable>
                <Form.Group controlId="destination">
                  <Form.Control
                    type="text"
                    name="destination"
                    placeholder="Drop Off Location"
                    value={this.props.destination}
                    onChange={this.props.handleInputChange} 
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group controlId="date">
                    <Form.Label>Pickup Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="xfrDate"
                      placeholder="Date"
                      value={this.props.xfrDate}
                      onChange={this.props.handleInputChange} 
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="time">
                    <Form.Label>Pickup Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="xfrTime"
                      placeholder="Time"
                      value={this.props.xfrTime}
                      onChange={this.props.handleInputChange} 
                    />
                  </Form.Group>
                </Form.Row>

                <Button 
                  variant="primary" 
                  type="submit" 
                  value="submit">
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