import React, {Component} from 'react'
import MapContainer from './MapContainer.js';
import Timer from './Timer.js'

export default class Runner extends Component {

    state = {
        center: {
            lat: 40.700862,
            lng: -73.987472
        }
    }

    componentDidMount(){
        navigator.geolocation.watchPosition(this.success, this.failure, this.options)
    }
    
    success = (response) => {
        fetch("https://da1ca9cb.ngrok.io/last", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({lat: response.coords.latitude, lng: response.coords.longitude, cookie: document.cookie})
        })
        .then(response => response.json())
        .then(response => this.setState({center: {lat: response.lat, lng: response.lng}}))
    }

    failure = () => {
        alert("Your location data isn't being shared!")
    }

    options = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000
      };

    render(){
        return(
            
            <React.Fragment>
            <div className="message">Test.</div>
            <Timer/>            
            <div className="mapDiv"><MapContainer center={this.state.center}/></div>
            
            </React.Fragment>
        )
    }

}