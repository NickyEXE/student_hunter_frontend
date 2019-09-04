import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'


export class MapContainer extends Component {


    render() {       
    return (
    <div>
        <Map
            style={{width: '100%', height: '100%', position: 'relative'}}
            google={this.props.google}
            initialCenter={this.props.center}
            center={this.props.center}
            zoom={16}
        >
          <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={this.props.center} />
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)
