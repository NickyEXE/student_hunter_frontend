import React, {Component} from 'react'
import MapContainer from './MapContainer.js';
import Timer from './Timer.js'

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
                {/* <div className="heading">Welcome hunter!</div> */}
                <div className="message">Find your friend! Tag, don't tackle. (and be back in ten minutes)</div>
                <Timer/>
                <div className="mapDiv"><MapContainer center={this.state.center}/></div>
            </React.Fragment>
        )
    }

}