import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import Overview from './pages/overview/overview.component';
import Timesheet from './pages/timesheet/timesheet.component';
import Activity from './pages/activity/activity.component';
import Host from './pages/host/host.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

// import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          this.setState({ currentUser: userAuth });
        });
      }



    //   const { setCurrentUser } = this.props;

    //   setCurrentUser({
    //     id: user.uid,
    //     name: user.displayName
    //   })

    //   console.log(user);
    //   console.log(this.props)
    });


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}

  render() {
    return (  
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Overview}
            // render={() => !this.props.currentUser ? (<Redirect to='/signin' />) : (<Overview />)} 
          />
          <Route path='/timesheet' 
            render={() => !this.props.currentUser ? (<Redirect to='/signin' />) : (<Timesheet />)} 
          />
          <Route path='/activity' 
            render={() => !this.props.currentUser ? (<Redirect to='/signin' />) : (<Activity />)} 
          />
          <Route path='/host' 
            render={() => !this.props.currentUser ? (<Redirect to='/signin' />) : (<Host />)} 
          />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
// })

export default connect(mapStateToProps)(App);
