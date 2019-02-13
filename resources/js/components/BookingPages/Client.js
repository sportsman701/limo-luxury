import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Form, Card, ButtonGroup, InputGroup } from "react-bootstrap";
// import "./Booking.css";
import Vehicles from "../../Vehicles.json";
import VehicleCard from "./../VehicleCard";
import Toggle from "./../ToggleRenderProps";

class Client extends Component {

  state = {

    Vehicles,
  };

  render() {
    return (
      <Container>
        <Jumbotron>
             
                <Toggle render={ ({on, toggle}) => (
                  <div>
                    {on && 

                      <Row>

                    {/* Vehice Images */}

                      {this.state.Vehicles.map(Vehicles => (
                        <VehicleCard
                          id={Vehicles.id}
                          name={Vehicles.name}
                          image={Vehicles.image}
                          description={Vehicles.description}
                          capacity={Vehicles.capacity}
                          quantity={Vehicles.quantity}
                        />

                        ))}

                        </Row>
                    
                    }
                  
                  <button onClick={toggle}>Show/Hide</button>
                  </div>
                  )}/>

   
                  
          


          <br />
          <hr />
          <br />

          {/* Client Information */}
          <Row>
            <Col>
              <Form>
                <Form.Group as={Col} controlId="formGridOrigin">
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control
                    value={this.props.origin}
                    readOnly
                    style={{ color: "black" }}                  
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDestination">
                  <Form.Label>Drop Off Location</Form.Label>
                  <Form.Control 
                    value={this.props.destination}
                    readOnly                  
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formGridXfrDate">
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control 
                    value={this.props.xfrDate}
                    readOnly                  
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formGridXfrTime">
                  <Form.Label>Pickup Time</Form.Label>
                  <Form.Control 
                    value={this.props.xfrTime}
                    readOnly                  
                  />
                </Form.Group>

              </Form>
            </Col>

            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="firstName"                      
                      placeholder="First Name"
                      value={this.props.firstName}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text"
                      name="lastName"
                      placeholder="Last Name" 
                      value={this.props.lastName}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                                
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      name="email"                    
                      placeholder="Email"
                      value={this.props.email}
                      onChange={this.props.handleInputChange}
                    />
                  </InputGroup>
                </Form.Group>
                
                <Form.Group controlId="formGridCellPhone">
                  <Form.Label>Cell Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="cellPhone"                    
                    placeholder="Cell Phone"
                    value={this.props.cellPhone}
                    onChange={this.props.handleInputChange}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="formGridAdults">
                    <Form.Label>Number of Adults</Form.Label>
                    <Form.Control
                      type="text"
                      name="numAdults"                    
                      placeholder="Adults"
                      value={this.props.numAdults}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="formGridChildren">
                    <Form.Label>Number of Children</Form.Label>
                    <Form.Control
                      type="text"
                      name="numChildren"                    
                      placeholder="Childen"
                      value={this.props.numChildren}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridNotes">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows="5"
                      name="xfrNotes"                    
                      placeholder="Comments"
                      value={this.props.xfrNotes}
                      onChange={this.props.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Button
                  variant="primary" 
                  name="currentPage"
                  type="submit"
                  value="submit"
                  onClick={this.props.handleNextPageLoad}
                  style={{ margin: "10px" }}
                >
                  Book it!
                </Button>

                <Button 
                  variant="primary" 
                  name="currentPage"
                  type="submit"
                  value="submit"
                  onClick={this.props.handlePreviousPageLoad}
                  style={{ margin: "10px" }}
                >
                  Back
                </Button>

              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Client;






// <Col>
// <Card style={{ width: "15rem" }}>
//   <Card.Img
//     variant="top"
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Brk8rQnGIa_LRovCmgPmjE9wySCZB7xE5xSC00Z_yFY3Nugx"
//   />
//   <Card.Body>
//     <Card.Title>Cadillac CT8 Limo</Card.Title>
//     <Card.Text>
//       This is a 2 passenger luxury vehicle
//       that is popular for airport drops
//     </Card.Text>
//     <ButtonGroup size="sm">
//       <Button variant="secondary">
//         Select
//       </Button>
//     </ButtonGroup>
//   </Card.Body>
// </Card>
// </Col>

// <Col>
// <Card style={{ width: "15rem" }}>
//   <Card.Img
//       variant="top"
//       src="http://funeralcarstore.com/wp-content/gallery/2016-lincoln-mkt-eaton/1393859343_fedmktlimo-fp-md5.png"
//   />
//   <Card.Body>
//     <Card.Title>
//       Lincoln MKT Eaton Limo
//     </Card.Title>
//     <Card.Text>
//       This 10 passenger business transport
//       vehicle that is popular for moving
//       important people
//     </Card.Text>
//     <ButtonGroup size="sm">
//       <Button variant="secondary">
//         Select
//       </Button>
//     </ButtonGroup>
//   </Card.Body>
// </Card>
// </Col>

// <Col>
// <Card style={{ width: "15rem" }}>
//   <Card.Img
//     variant="top"
//     src="https://www.fleet.ford.com/resources/ford/general/images/showroom/speciality-vehicle/lincoln_mkt_limo_front.png"
//   />
//   <Card.Body>
//     <Card.Title>Lincoln MKT Stretch</Card.Title>
//     <Card.Text>
//       This is a 20 passenger luxury vehicle
//       that is popular for large groups who
//       want to travel in style
//     </Card.Text>
//     <ButtonGroup size="sm">
//       <Button variant="secondary">
//         Select
//       </Button>
//     </ButtonGroup>
//   </Card.Body>
// </Card>
// </Col>