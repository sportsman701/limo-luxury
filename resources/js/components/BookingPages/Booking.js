import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import './Booking.css';
import Map from '../Map';
import LocationSearchInput from '../LocationSearchInput';

class Booking extends Component {

  render() {
    return (
      <Container>
        <Jumbotron>

          <Row>
            <Col>
              <Form>

                <Form.Group controlId="origin">
                  <Form.Label>Pickup Location</Form.Label>
                    <LocationSearchInput
                        name="origin"
                        value={this.props.origin}
                        handleChange={this.props.handleInputChange}
                        handleAutocompleteSelect={this.props.handleAutocompleteSelect}>
                    </LocationSearchInput>
                </Form.Group>

                <Form.Group controlId="destination">
                  <Form.Label>Drop Off Location</Form.Label>
                    <LocationSearchInput
                        name="destination"
                        value={this.props.destination}
                        handleChange={this.props.handleInputChange}
                        handleAutocompleteSelect={this.props.handleAutocompleteSelect}>
                    </LocationSearchInput>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} md="5" controlId="date">
                    <Form.Label>Pickup Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="xfrDate"
                      value={this.props.xfrDate}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="5" controlId="time">
                    <Form.Label>Pickup Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="xfrTime"
                      value={this.props.xfrTime}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <br />

                <Button
                  variant="primary"
                  name="currentPage"
                  type="submit"
                  value="submit"
                  onClick={this.props.handleNextPageLoad}>
                  Continue
                </Button>
              </Form>
            </Col>

            <Col>
              <Map origin={this.props.directions.origin} destination={this.props.directions.destination} />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  };
};

export default Booking;
