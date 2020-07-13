import React from 'react';

import { connect } from 'react-redux';
import { setSchedule } from '../../redux/host/host.actions';

import { TabLine } from '../../styled-components/tabs.styles';
// import ScheduleTable from '../schedule-table/schedule-table.component';
import IdleLoads from '../idle-loads/idle-loads.component';

class LoadQueue extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <TabLine tab='queue'></TabLine>
        <IdleLoads>
        </IdleLoads>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schedule: state.host.schedule
})

const mapDispatchToProps = dispatch => ({
  setSchedule: schedule => dispatch(setSchedule(schedule))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadQueue);