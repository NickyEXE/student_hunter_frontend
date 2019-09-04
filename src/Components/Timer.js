import React, {Component} from 'react'

export default class Timer extends Component {
    
    state = {
        minutes: 0,
        seconds: 0
    }

    countDownDate = new Date("Sep 4, 2019 18:45:00").getTime();
    getMinutesAndSeconds = () => { 
        const now = new Date().getTime();
        const distance = this.countDownDate - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({minutes: minutes, seconds: seconds})
    }

    componentDidMount(){
        this.getMinutesAndSeconds()
        setInterval(this.getMinutesAndSeconds, 1000)
    }

    render(){
        const secondsString = String(this.state.seconds)
        const seconds = secondsString.length === 1 ? "0" + secondsString : secondsString
        return(
            <div className={"timer"}>
                {this.state.minutes}:{seconds} remaining.
            </div>
        )
    }
}