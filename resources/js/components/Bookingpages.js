import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Booking from './BookingPages/Booking';
import Client from './BookingPages/Client';
import Recap from './BookingPages/Recap';


export default class BookingPages extends Component {
  state = {
    // ALL values to be passed to the Recap component
    // values to be passed to the booking component
    origin: "",
    destination: "",
    xfrDate: "",
    xfrTime: "",

    // values to be passed to the client component
    firstName: "",
    lastName: "",
    cellPhone: "",
    email: "",
    numAdults: "",
    numChildren: "",
    xfrNotes: "",

    // Controls what component to render
    currentPage: 0
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(`Form Value: ${this.state.inputvalue}`)
  }

  render() {
    const steps = [
      <Booking 
        origin={this.state.origin}
        destination={this.state.destination}
        xfrDate={this.state.xfrDate}
        xfrTime={this.state.xfrTime}
        handleInputChange={this.handleInputChange}
      />,
      <Client 
        // origin={this.state.origin}
        firstName={this.state.firstName}
        lasttName={this.state.firstName}
        cellPhone={this.state.firstName}
        email={this.state.firstName}
        numAdults={this.state.firstName}
        numChildren={this.state.firstName}
        xfrNotes={this.state.firstName}
        handleInputChange={this.handleInputChange}
      />,
      <Recap 
        origin={this.state.origin}
      />
    ]

    return steps[this.state.currentPage];
  }
}

if (document.getElementById('booking-pages')) {
  ReactDOM.render(<BookingPages />, document.getElementById('booking-pages'));
}
