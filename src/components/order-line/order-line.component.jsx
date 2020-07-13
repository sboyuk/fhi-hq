import React from 'react';

import { OrderContainer, OrderNum, Date } from './order-line.styles';

const OrderLine = ({details, handleClick}) => {
  const { order_num, sched_date, sched_time } = details;
  
  return(
    <OrderContainer onClick={handleClick}>
      <OrderNum>{order_num}</OrderNum>
      <Date>{`${sched_date} ${sched_time}`}</Date>
    </OrderContainer>
  )
}

export default OrderLine



