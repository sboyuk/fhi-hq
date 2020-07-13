import React from 'react';
import { connect } from 'react-redux';

import CardContainer from '../../styled-components/card-container.component.jsx';
import { TableLine, Data, Date } from './time-card.styles';


class TimeCard extends React.Component {

  componentDidMount() { 

  }

  render() {
    const { timesheet } = this.props.currentUser;
    // console.log(Object.keys(timesheet).sort())
    
    let date;

    return(
      <CardContainer>
        {
          timesheet ?
          Object.entries(timesheet).sort().map(([key, punch]) => {

            const line = 
              <TableLine key={key}>
                <Date>
                  {
                  date !== punch.date ? punch.date : null
                  }
                </Date>
                <Data>{punch.time}</Data>
                <Data>{punch.type}</Data>
              </TableLine>;

            date = punch.date;

            return (
              line
            )
          })
          : null
        }
      </CardContainer>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(TimeCard)