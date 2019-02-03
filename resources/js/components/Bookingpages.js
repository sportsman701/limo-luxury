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
    currentPage: [1]
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Form Value: ${this.state.inputvalue}`)
  }

  render() {
    return (
      // <div> 
        <Booking 
          origin={this.state.origin}
          destination={this.state.destination}
          xfrDate={this.state.xfrDate}
          xfrTime={this.state.xfrTime}
          handleChange={this.state.handleChange}
        />
        // <Client 
        //   firstName={this.state.firstName}
        // />
        // <Recap 
        //   origin={this.state.origin}
        // />
      // </div>
    )
  }
}

if (document.getElementById('booking-pages')) {
  ReactDOM.render(<BookingPages />, document.getElementById('booking-pages'));
}
