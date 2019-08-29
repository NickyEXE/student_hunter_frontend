import React, {Component} from 'react'
import MapContainer from './MapContainer.js';

export default class Hunter extends Component {

    state = {
        center: {
            lat: 40.700862,
            lng: -73.987472
        }
    }

    componentDidMount(){
        this.smellBlood()
        setInterval(this.smellBlood, 6000)
    }

    smellBlood = () => {
        fetch("https://da1ca9cb.ngrok.io/last")
        .then(res => res.json())
        .then(res => this.setState({center: {lat: res.lat, lng: res.lng}}))
    }

    render(){
        return(
            <React.Fragment>
                <h1 className={"Message"}>Find your friend! Tag, don't tackle. (and be back in ten minutes)</h1>
                <MapContainer center={this.state.center}/>
            </React.Fragment>
        )
    }

}