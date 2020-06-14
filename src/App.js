import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Overview from './pages/overview/overview.component';
import Timesheet from './pages/timesheet/timesheet.component';
import Activity from './pages/activity/activity.component';
import Host from './pages/host/host.component';

import Header from './components/header/header.component';
import { switchTab } from './redux/header/header.actions';

class App extends React.Component {

  componentDidMount() {
    const { switchTab } = this.props;
    
  }
 
  render() {
    return (  
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Overview} />
          <Route exact path='/timesheet' component={Timesheet} />
          <Route exact path='/activity' component={Activity} />
          <Route exact path='/host' component={Host} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  switchTab: headerTabs => dispatch(switchTab(headerTabs))
});

export default connect(null, )(App);
