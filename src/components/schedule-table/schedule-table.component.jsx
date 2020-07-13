import React from 'react';

import { connect } from 'react-redux';
import { setSchedule, addToDockedLoads } from '../../redux/host/host.actions';
import { getSchedule } from '../../firebase/host.utils';

import CardContainer from '../../styled-components/card-container.component';
import OrderLine from '../order-line/order-line.component'
import ScheduleFileInput from '../schedule-file-input/schedule-file-input';
import RectangularButton from '../../styled-components/rectangular-button.styles';
import FlexRow from '../../styled-components/flex-row.styles';
import { FormInputField } from '../form-input/form-input.styles';
import ScrollToTopButton from '../../components/scroll-to-top-button/scroll-to-top-button.component';

class ScheduleTable extends React.Component {

  async componentDidMount() {
    const { setSchedule } = this.props;
    const schedule = await getSchedule();
    
    if(schedule) setSchedule(schedule);
  }

  selectedOrder = (e) => {
    const orderNum = e.target.parentElement.firstElementChild.textContent;
    const index = this.selected.indexOf(orderNum);

    console.log(e.target.parentElement.props);
    if(index === -1) {
      e.target.parentElement.style.borderBottom = '1px solid black'
      this.selected.push(orderNum);
    } else {
      e.target.parentElement.style.borderBottom = 'none'
      this.selected.splice(index, 1);
    }
  }

  selected = []
  dockNumber = null
  // searchFieldValue = null

  // handleSearchInput = (e) => {

  // }

  addToDockedLoads = () => {
    const { dockedLoads: loads, addToDockedLoads } = this.props;
    loads.push(this.selected);
    console.log(loads);
    addToDockedLoads(loads);
  }

  render() {
    const { purchaseOrders } = this.props.schedule;

    const inputStyles = {
      width: '70px'
    }

    return(
      <CardContainer >
        <ScheduleFileInput />
        <FlexRow>
          <FormInputField 
            style={inputStyles} 
            placeholder='Dock #'
            onChange={(e) => {
              this.dockNumber = e.target.value;
            }}
          />
          <RectangularButton onClick={this.addToDockedLoads}>Add To Idle Queue</RectangularButton>
        </FlexRow>
        {/* <FormInputField 
          placeholder='Search Purchase Orders'
          onChange={this.handleSearchInput}
        /> */}
        { 
          purchaseOrders ?
          Object.entries(purchaseOrders).sort().map(([orderNum, orderDetails]) => {
            return (
              <OrderLine key={orderNum} details={orderDetails} handleClick={this.selectedOrder}></OrderLine>
            )
          })
          : null
        }
        <ScrollToTopButton />
      </CardContainer>
    )
  }
}

const mapStateToProps = state => ({
  schedule: state.host.schedule,
  loads: state.host.loads
})

const mapDispatchToProps = dispatch => ({
  setSchedule: schedule => dispatch(setSchedule(schedule)),
  addToDockedLoads: dock => dispatch(addToDockedLoads((dock)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTable);