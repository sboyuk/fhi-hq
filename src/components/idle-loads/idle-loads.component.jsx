import React from 'react';
import { Link } from 'react-router-dom'
import connect from 'react-redux';


import CardContainer from '../../styled-components/card-container.component';
import ReactangularButton from '../../styled-components/rectangular-button.styles';

const IdleLoads = () => {

  return(
    <CardContainer>
      <Link to='/schedule'>
        <ReactangularButton>Add Load</ReactangularButton>
      </Link>
    </CardContainer>
  )
}

const mapStateToProps = state => ({
  idle: state.host.loads.idle
})

export default IdleLoads;