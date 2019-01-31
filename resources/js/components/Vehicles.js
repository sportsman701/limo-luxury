import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  ButtonGroup
} from "react-bootstrap";
import "./Vehicles.css";
import ReactDOM from 'react-dom';

export default class vehicles extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <br />
          <Jumbotron>
            <Row>
              <Col>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Brk8rQnGIa_LRovCmgPmjE9wySCZB7xE5xSC00Z_yFY3Nugx"
                  />
                  <Card.Body>
                    <Card.Title>Cadillac CT8 Limo</Card.Title>
                    <Card.Text>
                      This is a 2 passenger luxury vehicle that is popular for
                      airport runs
                    </Card.Text>
                    <ButtonGroup size="sm">
                      <Button variant="secondary">Update</Button>
                      <Button variant="secondary">Delete Vehicle</Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://funeralcarstore.com/wp-content/gallery/2016-lincoln-mkt-eaton/1393859343_fedmktlimo-fp-md5.png"
                  />
                  <Card.Body>
                    <Card.Title>Lincoln MKT Eaton Limo</Card.Title>
                    <Card.Text>
                      This 8 passenger business transport vehicle that is
                      popular for moving important people
                    </Card.Text>
                    <ButtonGroup size="sm">
                      <Button variant="secondary">Update</Button>
                      <Button variant="secondary">Delete Vehicle</Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.fleet.ford.com/resources/ford/general/images/showroom/speciality-vehicle/lincoln_mkt_limo_front.png"
                  />
                  <Card.Body>
                    <Card.Title>Lincoln MKT Stretch</Card.Title>
                    <Card.Text>
                      This is a 10 passenger luxury vehicle that is popular for
                      large groups who want to travel in style
                    </Card.Text>
                    <ButtonGroup size="sm">
                      <Button variant="secondary">Update</Button>
                      <Button variant="secondary">Delete Vehicle</Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Jumbotron>

          <Button variant="primary" type="submit">
            Add a new car type
          </Button>
        </Container>
      </div>
    );
  }
}

if (document.getElementById('vehicles')) {
  ReactDOM.render(<Vehicles />, document.getElementById('vehicles'));
}
