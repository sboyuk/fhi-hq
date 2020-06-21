import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { switchTab } from '../../redux/header/header.actions';
import { setCurrentUser } from '../../redux/user/user.actions';

import { CardContainer } from '../../components/card/card.styles';
import RectangularButton from '../../components/rectangular-button/rectangular-button.component';
import SignUp from '../../components/sign-up/sign-up.component';


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
            <div>
                <CardContainer>
                    <RectangularButton onClick={() => auth.signOut()}>SIGN OUT</RectangularButton>
                </CardContainer>
                <SignUp />

            </div>

        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })

const mapDispatchToProps = dispatch => ({
    switchTab: headerTabs => dispatch(switchTab({headerTabs})),
    setCurrentUser: currentUser => dispatch(setCurrentUser({user: currentUser}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview);