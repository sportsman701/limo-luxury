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

               <h1>  Reservation Details:   </h1>
               <hr />
               <hr />
               <h4>  Name: {this.props.firstName} {this.props.lastName}  </h4> 
               <h4>  Email:  {this.props.email}    </h4>
               <h4>  Cell Phone: {this.props.cellPhone}  </h4>
               <h4>   Adults: {this.props.numAdults}   </h4>
               <h4>   Kids: {this.props.numChildren}  </h4>
               <h4>   Notes: {this.props.xfrNotes} </h4>
               <hr />
               <h4>   Origin:  {this.props.origin} </h4> 
               <h4>  Destination:  {this.props.destination} </h4>
               <h4>  Pickup Date: {this.props.xfrDate}  </h4>
               <h4>   Pickup Time: {this.props.xfrTime}   </h4>
             
            </Col>

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

















