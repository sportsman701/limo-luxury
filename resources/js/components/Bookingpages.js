import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Booking from './BookingPages/Booking';
// import Client from './BookingPages/Client';
// import Recap from './BookingPages/Recap';


export default class Bookingpages extends Component {
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
    currentPage: [1]
  }

  render() {
    return (
      <Booking 
        origin={this.state.origin}
        destination={this.state.destination}
        xfrDate={this.state.xfrDate}
        xfrTime={this.state.xfrTime}
      />
    )
  }
}

if (document.getElementById('booking-pages')) {
  ReactDOM.render(<Bookingpages />, document.getElementById('booking-pages'));
}
