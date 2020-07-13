import React from 'react';
import { connect } from 'react-redux';

import { saveTimePunch } from '../../firebase/timesheet.utils';

import { RoundButton, Time, CenterMessage } from './card.styles';
import CardContainer from '../../styled-components/card-container.component';

class TimePunchButton extends React.Component {
    constructor() {
        super();

        this.state = {
            hours: 0,
            minutes: 0,
            messageOpacity: 0,
            message: 'message'
        }
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

    generateTimePunch = event => {
        event.preventDefault();

        if(Date.now() - this.props.currentUser.lastPunchTime < 60000) {
            this.showMessage('Please wait');
        } else {
            const { currentUser } = this.props;

            const { hours, minutes } = this.state;
    
            saveTimePunch(currentUser, hours, minutes);
            this.showMessage('Timestamp saved')
        }
    }

    showMessage(message) {
        this.setState({ messageOpacity: 1, message: message });
        setTimeout(() => {
            this.setState({ messageOpacity: 0});
        }, 2000);
    }

    render() {
        const {currentUser} = this.props;
        return (
            <CardContainer>
                <Time>
                    {`${this.state.hours}:${this.state.minutes}`}
                </Time>
                <RoundButton onClick={this.generateTimePunch} >
                    {currentUser.lastPunchType === 'In' ? 'CLOCK OUT' : 'CLOCK IN'}
                </RoundButton>
                <CenterMessage opacity={this.state.messageOpacity}>{this.state.message}</CenterMessage>
            </CardContainer>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(TimePunchButton);