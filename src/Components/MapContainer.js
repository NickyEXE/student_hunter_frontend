import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'


export class MapContainer extends Component {

    state={
        lat: 40.700862,
        lng: -73.987472
    }

    componentDidMount(){
        setInterval(()=>this.setState({lat: this.state.lat +.0005}), 1000)
    }

    render() {       
    return (
    <React.Fragment>
    <h1>You are the hunter! Hunt your friend!</h1>
        <Map
            style={{width: '100%', height: '50vh', position: 'relative'}}
            google={this.props.google}
        //   style={style}
            initialCenter={this.props.center}
            center={this.props.center}
            
            zoom={16}
        //   onClick={this.onMapClicked}
        >
        <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={this.props.center} />
        </Map>
        </React.Fragment>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "GOES HERE"
})(MapContainer)
