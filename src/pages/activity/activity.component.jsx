import React from 'react';
import { connect } from 'react-redux';

import { switchTab } from '../../redux/header/header.actions';

class Activity extends React.Component {

    componentDidMount() {
        const { switchTab } = this.props;

        switchTab({
            overview: false,
            timesheet: false,
            activity: true,
            host: false
        });
    }

    render() {
        return (
            <div>Activity page</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchTab: headerTabs => dispatch(switchTab({headerTabs}))
})

export default connect(null, mapDispatchToProps)(Activity);