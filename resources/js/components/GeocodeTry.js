import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Booking from './BookingPages/booking';

// origin={this.props.origin}

export default class GeocodeTry extends Component {

  state = {
    originForm: "",
    destinationForm: ""
  }

    constructor(props) {
        super(props)
        this.state = { origin: '' }
        this.onChange = (address) => this.setState({ origin })
      }
     
      handleFormSubmit = (event) => {
        event.preventDefault()
     
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error))

      }
     
      render() {
        const inputProps = {
          value: this.state.origin,
          onChange: this.onChange,
        }
     
        return (
          <form onSubmit={this.handleFormSubmit}>

                <Form.Group controlId="origin">
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control
                  
                    type="text"
                    name="origin"
                    placeholder="Pickup Location"
                    value={this.state.originForm}
                    onClick={geocodeByAddress(this.state.originForm)}
                  />
                </Form.Group>

                <Form.Group controlId="destination">
                  <Form.Label>Drop Off Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="destination"
                    placeholder="Drop Off Location"
                    value={this.props.destination}
                    onChange={this.props.handleInputChange} 
                  />
                </Form.Group> */}
            <PlacesAutocomplete
              origin={this.props.originFrom}
              destination={this.props.destinationForm}
              {/* nputProps={inputProps} /> */}
            />
            <button type="submit">Submit</button>
          </form>
        )
      }
    }


