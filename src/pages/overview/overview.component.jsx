import React from 'react';
import { connect } from 'react-redux';

import { switchTab } from '../../redux/header/header.actions';

import { Container } from './overview.styles';

class Overview extends React.Component {

    componentDidMount() {
        const { switchTab } = this.props;

        switchTab({
            overview: true,
            timesheet: false,
            activity: false,
            host: false,
        });
    }

    render() {
        return(
            <Container>Overview Page</Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchTab: headerTabs => dispatch(switchTab({headerTabs}))
})

export default connect(null, mapDispatchToProps)(Overview);