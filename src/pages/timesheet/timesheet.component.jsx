import React from 'react';
import { connect } from 'react-redux';

import { switchTab } from '../../redux/header/header.actions';
import TimePunchCard from '../../components/card/card.component';

class Timesheet extends React.Component {

    componentDidMount() {
        const { switchTab } = this.props; 

        switchTab({
            overview: false,
            timesheet: true,
            activity: false,
            host: false
        });
    }

    render() {
        return (
            <TimePunchCard /> 
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchTab: headerTabs => dispatch(switchTab({headerTabs}))
})

export default connect(null, mapDispatchToProps)(Timesheet);