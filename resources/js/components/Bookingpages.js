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
          firstName={this.state.firstName}
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
