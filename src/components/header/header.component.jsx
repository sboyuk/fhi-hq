import React from 'react';
import {connect} from 'react-redux';
// import createStructuredSelector from 'reselect';

import { NavOpt, HeaderContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <NavOpt to='/'>Overview</NavOpt>
        <NavOpt to='/timesheet'>Timesheet</NavOpt>
        <NavOpt to='/activity'>Activity</NavOpt>
        <NavOpt to='/host'>Host</NavOpt>
    </HeaderContainer>
)

export default connect()(Header);