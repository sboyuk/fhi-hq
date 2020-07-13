import styled from 'styled-components';

export const NavLine = styled.div`
  height: 1px;
  width: 25%;
  background-color: black;
  position: fixed;
  bottom: 39px;
  left: ${({page}) => {
      if (page === 'overview') {
        return '0%'
      } else if (page === 'timesheet') {
        return '25%'
      } else if (page === 'activity') {
        return '50%';
      } else if(page === 'host') {
        return '75%'
      }
    }
  };
`