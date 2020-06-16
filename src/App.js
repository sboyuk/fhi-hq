import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Overview from './pages/overview/overview.component';
import Timesheet from './pages/timesheet/timesheet.component';
import Activity from './pages/activity/activity.component';
import Host from './pages/host/host.component';

import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (  
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Overview} />
          <Route path='/timesheet' component={Timesheet} />
          <Route path='/activity' component={Activity} />
          <Route path='/host' component={Host} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, )(App);
