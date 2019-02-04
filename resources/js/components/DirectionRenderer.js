<MapPoints
origin={this.state.origin} destination={this.state.destination} />



DirectionService.route({
    origin: this.props.origin,
    destination: this.props.destination,
    travelMode: google.maps.TravelMode.DRIVING,
}, (result, status) => {
  
});
