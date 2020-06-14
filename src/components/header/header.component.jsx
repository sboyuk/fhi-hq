import React from 'react';
import {connect} from 'react-redux';
import createStructuredSelector from 'reselect';

import { NavOpt, HeaderContainer } from './header.styles';

const Header = ({header}) => (
    <HeaderContainer>
        <NavOpt to='/' active={header.overview}>Overview</NavOpt>
        <NavOpt to='/timesheet' active={header.timesheet}>Timesheet</NavOpt>
        <NavOpt to='/activity' active={header.activity}>Activity</NavOpt>
        <NavOpt to='/host' active={header.host}>Host</NavOpt>
    </HeaderContainer>
)

const mapStateToProps = state => ({
    header: state.header.headerTabs
});

export default connect(mapStateToProps)(Header);