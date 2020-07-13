import React from 'react';

import { connect } from 'react-redux';

import { NavLine } from '../../styled-components/nav-line.component';

class Activity extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <NavLine page='activity' />
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity);