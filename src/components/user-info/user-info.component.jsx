import React from 'react'
import { connect } from 'react-redux';

import { InfoContainer } from './user-info.styles';

class UserInfo extends React.Component {

  render() {
    const { currentUser } = this.props;
    return(
      <div>
        <InfoContainer>
          <div>Name:</div>
          <div>{currentUser.displayName}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Employee Number:</div>
          <div>{currentUser.ein}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Location:</div>
          <div>{currentUser.location}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Department:</div>
          <div>{currentUser.department}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Average Daily Wage:</div>
          <div>${currentUser.averageDailyWages}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Personal Days:</div>
          <div>{currentUser.personalDays}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Vacation Days:</div>
          <div>{currentUser.vacationDays}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Email:</div>
          <div>{currentUser.email}</div>
        </InfoContainer>
        <InfoContainer>
          <div>Address:</div>
          <div>{currentUser.address}</div>
        </InfoContainer>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserInfo);