import React from 'react';
import { connect } from 'react-redux';

import { switchTab } from '../../redux/header/header.actions';

class Host extends React.Component {

    componentDidMount() {
        const { switchTab } = this.props;

        switchTab({
            overview: false,
            timesheet: false,
            activity: false,
            host: true,
        });
    }

    render() {
        return(
            <div>Host Page</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchTab: headerTabs => dispatch(switchTab({headerTabs}))
})

export default connect(null, mapDispatchToProps)(Host);