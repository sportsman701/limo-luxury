import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Booking from './BookingPages/Booking';
import Client from './BookingPages/Client';
import Recap from './BookingPages/Recap';

export default class BookingPages extends Component {
    state = {
        // ALL values to be passed to the Recap component
        // values to be passed to the booking component
        origin: "Villas of Grand Cypress, North Jacaranda Street, Orlando, FL, USA",
        destination: "Orlando International Airport, Orlando, FL, USA",
        directions: { origin: null, destination: null },
        xfrDate: "",
        xfrTime: "",

        // values to be passed to the client component
        firstName: "Test",
        lastName: "test",
        cellPhone: "555-123-1234",
        email: "test@test.com",
        numAdults: "2",
        numChildren: "",
        xfrNotes: "test",

        // values to be passed to the Recap Component
        vehicleType: "",
        xfrCost: "",
        
        // Controls what component to render
        currentPage: 0
    }

    handleInputChange = event => {
        // console.log(event);
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAutocompleteSelect = (data) => {
        // console.log({ data });

        this.handleInputChange({ target: { name: data.name, value: data.address }});

        this.setState({
            directions: { ...this.state.directions, [data.name]: data.coordinates },
        });
    }

    handleNextPageLoad = event => {
        event.preventDefault();
        // console.log("'I've been clicked")
        this.setState({ [name]: this.state.currentPage++ })
    }

    handlePreviousPageLoad = event => {
        event.preventDefault();
        // console.log("I've been clicked")
        this.setState({ [name]: this.state.currentPage-- })
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(`Form Value: ${this.state.inputvalue}`)
    }

    createNewBooking = event => {
        
        event.preventDefault();
    
        let newBooking = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          cellPhone: this.state.cellPhone,
          email: this.state.email,
          xfrDate: this.state.xfrDate,
          xfrTime: this.state.xfrTime,
          origin: this.state.origin,
          destination: this.state.destination,
          numAdults: this.state.numAdults,
          numChildren: this.state.numChildren,
          vehicleType: this.state.vehicle,
          xfrNotes: this.state.xfrNotes
        };
    
        axios.post('/api/booking', newBooking)
          .then(function (response) {
            console.log("Booking Created");
            // console.log(response);
            // console.log(response.request.responseURL);
            window.location.replace(response.request.responseURL);
          })
          .catch(function (error) {
            console.log(error);
          });

      
      }
    

    render() {
        const steps = [
            <Booking
                origin={this.state.origin}
                destination={this.state.destination}
                directions={this.state.directions}
                xfrDate={this.state.xfrDate}
                xfrTime={this.state.xfrTime}
                handleInputChange={this.handleInputChange}
                handleNextPageLoad={this.handleNextPageLoad}
                handleAutocompleteSelect={this.handleAutocompleteSelect}
            />,
            <Client
                origin={this.state.origin}
                destination={this.state.destination}
                xfrDate={this.state.xfrDate}
                xfrTime={this.state.xfrTime}
                firstName={this.state.firstName}
                lasttName={this.state.lastName}
                cellPhone={this.state.cellPhone}
                email={this.state.email}
                numAdults={this.state.numAdults}
                numChildren={this.state.numChildren}
                xfrNotes={this.state.xfrNotes}
                handleInputChange={this.handleInputChange}
                handlePreviousPageLoad={this.handlePreviousPageLoad}
                handleNextPageLoad={this.handleNextPageLoad}
            />,
            <Recap
                origin={this.state.origin}
                destination={this.state.destination}
                xfrDate={this.state.xfrDate}
                xfrTime={this.state.xfrTime}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                cellPhone={this.state.cellPhone}
                email={this.state.email}
                numAdults={this.state.numAdults}
                numChildren={this.state.numChildren}
                xfrNotes={this.state.xfrNotes}
                directions={this.state.directions}
                createNewBooking={this.createNewBooking}
                handlePreviousPageLoad={this.handlePreviousPageLoad}
            />
        ];

        return steps[this.state.currentPage];
    }
}

if (document.getElementById('booking-pages')) {
    ReactDOM.render(<BookingPages />, document.getElementById('booking-pages'));
}
