import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Booking from './BookingPages/booking';

// origin={this.props.origin}

export default class GeocodeTry extends Component {

  

    constructor(props) {
        super(props)
        this.state = { origin: '' }
        this.onChange = (address) => this.setState({ origin })
      }
     
      handleFormSubmit = (event) => {
        event.preventDefault()
     
        geocodeByAddress(this.state.address)
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
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        )
      }
    }


