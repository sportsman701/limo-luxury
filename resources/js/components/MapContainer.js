import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles= {
    width: '200px',
    height: '200px'

};

export default class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
            lat: 28.5383,
            lng: 81.3792
        }}

      />
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAXBh0Pf9RVhVuXh6YzaTHZJPDx_LSQgB0'
}) (MapContainer);

if (document.getElementById('map')) {
    ReactDOM.render(<MapContainer />, document.getElementById('map'));
  }

