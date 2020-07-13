import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import Overview from './pages/overview/overview.component';
import Timesheet from './pages/timesheet/timesheet.component';
import Activity from './pages/activity/activity.component';
import Host from './pages/host/host.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import ScheduleTable from './components/schedule-table/schedule-table.component';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
        return
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (  
      <div>
        {
          !this.props.currentUser ? <SignInPage /> 
          :
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Overview} />
              <Route path='/timesheet' component={Timesheet} />
              <Route path='/activity' component={Activity} />
              <Route path='/host' component={Host} />
              <Route path='/schedule' component={ScheduleTable} />
            </Switch> 
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
  // setTimeCard: 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
