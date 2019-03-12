import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'
import Directions from './Directions';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const GoogleMapExample = withGoogleMap(() => {
            const markers = [];

            if (this.props.origin) {
                const { lat: originLat, lng: originLng } = this.props.origin;
                markers.push(<Marker key="origin" name="origin" position={{ lat: originLat, lng: originLng }}/>);
            }

            if (this.props.destination) {
                const { lat: destinationLat, lng: destinationLng } = this.props.destination;
                markers.push(<Marker key="destination" name="destination" position={{ lat: destinationLat, lng: destinationLng }}/>);
            }

            return (
                <GoogleMap defaultCenter={{ lat: 28.5383, lng: -81.3792 }} defaultZoom={10}>
                    {markers}

                {/* <DirectionsRenderer Directions = {this.props.directions} />  */}
                </GoogleMap>
            )
        });

        return (
            <GoogleMapExample
                containerElement={<div style={{ height: `450px`, width: '500px' }}/>}
                mapElement={<div style={{ height: `100%` }}/>}

                
            />
        );
    }
};

export default Map;
