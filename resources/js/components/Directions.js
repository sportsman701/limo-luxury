import React, { Component } from 'react'
import { DirectionService, DirectionsRenderer } from 'react-google-maps'


export default class Directions extends Component {


  render() {
    <MapPoints
    origin={this.state.origin} destination={this.state.destination} />

    DirectionService.route({
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: google.maps.TravelMode.DRIVING,  
        
    }, (result, status) => {
    
    }); 


    return (
      <div>
        
      </div>
    )
  }
}




