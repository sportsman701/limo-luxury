import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Card, ButtonGroup } from "react-bootstrap";
import "./Booking.css";
import Map from '../Map';


class Recap extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row>
               <Col>

               <h1>  Reservation Details:   </h1>

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

              <div class="text-center">
          <Button
                  variant="primary"
                  name="Edit"
                  type="submit"
                  value="submit"
                  onClick= "test">
                  EDIT 
          </Button>

          <Button
                  variant="primary"
                  name="Confirm"
                  type="submit"
                  value="submit"
                  onClick= "test">
                  CONFIRM
          </Button>
          </div>
             
            </Col>

            <Col>
                <Map origin={this.props.directions.origin} destination={this.props.directions.destination} />
            </Col>
          </Row>

  
        </Jumbotron>
      </Container>
    );
  }
}

export default Recap;





















