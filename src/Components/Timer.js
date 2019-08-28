import React, {Component} from 'react'

export default class Timer extends Component {
    
    state = {
        minutes: 0,
        seconds: 0
    }

    countDownDate = new Date("Aug 28, 2019 13:56:00").getTime();
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
        return(
            <div className={"timer"}>
                {this.state.minutes}: {this.state.seconds}
            </div>
        )
    }
}