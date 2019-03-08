import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import './BookingPages/Booking.css';
import Map from './Map';

export default class Confirmation extends Component {
    state = {
        confirmationNum: "",
        origin: "",
        destination: "",
        directions: { origin: null, destination: null },
        xfrDate: "",
        xfrTime: "",
        firstName: "",
        lastName: "",
        cellPhone: "",
        email: "",
        numAdults: "",
        numChildren: "",
        xfrNotes: "",
        vehicleType: "",
        xfrCost: "",
        
    }
    
        // this.setState({
        //     directions: { ...this.state.directions, [data.name]: data.coordinates },

    
    componentDidMount() {
        // const bookingID = this.props.match

        axios
            .get(`/confirmation/55`)
            .then(response => {
                const confirm = response.data;
                this.setState({
                    confirmationNum: confirm.id,
                    firstName: confirm.first_name,
                    lastName: confirm.last_name,
                    cellPhone: confirm.cell_phone,
                    email: confirm.email,
                    xfrDate: confirm.xfer_date,
                    xfrTime: confirm.xfer_time,
                    origin: confirm.origin,
                    destination: confirm.destination,
                    numAdults: confirm.num_adults,
                    numChildren: confirm.num_children,
                    vehicleType: confirm.vehicle_type,
                    xfrNotes: confirm.xfer_notes
                })
            })
    }
 

    render() {
    
        return (
            <Container>
              <Jumbotron>
                <Row>
                    <Col>
                        <h1 id='confirmNum'>Confirmation #: {this.state.confirmationNum}</h1>

                        <hr />
                    </Col>
                    
                </Row>

                <Row>
                     <Col>
      
                        <h2>  Reservation Details:   </h2>
                        <hr />
                        <h4>  Name: {this.state.firstName} {this.state.lastName}  </h4> 
                        <h4>  Email:  {this.state.email}    </h4>
                        <h4>  Cell Phone: {this.state.cellPhone}  </h4>
                        <h4>  Notes: {this.state.xfrNotes} </h4>
                        <hr />
                        <h4>   Vehicle:   </h4> 
                        <h4>   Adults: {this.state.numAdults}   </h4>
                        <h4>   Kids: {this.state.numChildren}  </h4>
                        <h4>    Luggage:   </h4>
                        
                        <hr />
        
                   
                  </Col>
      
                  <Col>
                      <Map origin={this.state.directions.origin} destination={this.state.directions.destination} />
                        <br />
                        <h4>   Origin:  {this.state.origin} </h4> 
                        <h4>  Destination:  {this.state.destination} </h4>
                        <hr />
                        <h4>  Pickup Date: {this.state.xfrDate}  </h4>
                        <h4>   Pickup Time: {this.state.xfrTime}   </h4>
                  </Col>
                  
                </Row>
      
        
              </Jumbotron>
            </Container>
        );
    };
};

if (document.getElementById('confirmation')) {
    ReactDOM.render(<Confirmation />, document.getElementById('confirmation'));
}
