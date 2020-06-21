import React from 'react';
// import { connect } from 'react-redux';

import { CardContainer, RoundButton, Time } from './card.styles';

class TimePunchCard extends React.Component {
    state = {
        hours: 0,
        minutes: 0,
    }

    getTime() {
        const d = new Date();
        let minutes = d.getMinutes().toString();
        let hours = d.getHours().toString();
        if (hours.length < 2) { hours = '0' + hours }
        if (minutes.length < 2) { minutes = '0' + minutes }
        this.setState({ 
            hours: hours,
            minutes: minutes
        })
    }

    componentDidMount() {
        this.getTime();
        this.timer = setInterval(() => {
            this.getTime();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <CardContainer>
                <Time>
                    {`${this.state.hours}:${this.state.minutes}`}
                </Time>
                <RoundButton>CLOCK IN</RoundButton>
            </CardContainer>
        );
    }
}

export default TimePunchCard;