import React from 'react';
import { connect } from 'react-redux';

import TimePunchButton from '../../components/card/card.component';
import TimeCard from '../../components/time-card/time-card.component';


import { NavLine } from '../../styled-components/nav-line.component';

class Timesheet extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <TimePunchButton /> 
                <TimeCard/>
                <NavLine page='timesheet'/>
            </div>
        )
    }
}

export default connect()(Timesheet);