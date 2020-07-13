import React from 'react';

import { TabLine } from '../../styled-components/tabs.styles';
import CardContainer from '../../styled-components/card-container.component';

class CurrentLoad extends React.Component {


  render() {
    return(
      <CardContainer>
        <TabLine tab='current'></TabLine>
      </CardContainer>
    )
  }
}

export default CurrentLoad;