import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'



class Map extends Component {
  constructor(props) {
    super(props);

  }
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 28.5383, lng: -81.3792 } }
        defaultZoom = { 10 } >

        <Marker
        position={{ lat: 28.56, lng: -81.44 }}
        ></Marker>

        <Marker
        position={{ lat: 28.52, lng: -81.54 }}
        ></Marker>

        
      </GoogleMap>


   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `600px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }

        />
        <div>
        <h3>{this.props.origin}</h3>
        <h3>{this.props.destination}</h3>
        </div>
  
      </div>
   );
   }
};

export default Map;