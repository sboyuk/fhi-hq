import React from 'react';

import { connect } from 'react-redux';
import { setSchedule } from '../../redux/host/host.actions';
import { saveSchedule } from '../../firebase/host.utils';

import RectangularButton from '../../styled-components/rectangular-button.styles';

class ScheduleFileInput extends React.Component {

  getCsv = (e) => {
    e.preventDefault();

    let csv = e.target.files[0];
    const { id, displayName } = this.props.currentUser;

    const reader = new FileReader();

    reader.readAsText(csv);
    reader.onload = (event) => {
      const csv = event.target.result
      const schedule = this.parseCsv(csv)
      saveSchedule(schedule, id, displayName)

    }
    reader.onerror = (event) => console.log(event.target.error);
  }

  parseCsv = (csv) => {
    const lines = csv.split('\n');
    const keys = lines[0].split(',');
    let parsedCsv = {}
    console.log(lines)
    

    for(let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const key = `${values[1]}`
      // let object = {[key]: {}};
      parsedCsv[key] = {};
        for(let i = 0; i < values.length; i++) {
          parsedCsv[key][keys[i]] = values[i];
        }
      // parsedCsv.push(object);
    }
    console.log(parsedCsv);
    return parsedCsv
  }


  render() {
    const inputStyle = {display: 'none'};
    return(
      <RectangularButton>
          <label htmlFor='file'>Update Schedule File</label>
        <input id='file' name='file' type='file' accept='.csv' style={inputStyle} onChange={this.getCsv}/>
      </RectangularButton>
    )
  }
}

const mapStateToProps = state => ({
  schedule: state.host.schedule,
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setSchedule: schedule => dispatch(setSchedule(schedule))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleFileInput);