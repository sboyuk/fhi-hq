import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CardContainer from '../../styled-components/card-container.component';
import RectangularButton from '../../components/rectangular-button/rectangular-button.component';
import UserInfo from '../../components/user-info/user-info.component';
import { NavLine } from '../../styled-components/nav-line.component';


class Overview extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <CardContainer>
                    <UserInfo />
                    <RectangularButton onClick={() => auth.signOut()}>SIGN OUT</RectangularButton>
                </CardContainer>
                <NavLine page='overview' />
            </div>

        )
    }
}

export default connect()(Overview);