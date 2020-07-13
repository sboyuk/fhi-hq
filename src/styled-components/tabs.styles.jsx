import styled from 'styled-components';

export const TabBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  height: 40px;
  line-height: 40px;
`

export const Tab = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: lightblue; */
  color: black;
  text-decoration: none;
  font-size: .8rem;
`

export const TabLine = styled.div`
  height: 1px;
  width: 50vw;
  background-color: black;
  position: fixed;
  top: 39px;
  left: ${({tab}) => {
      if (tab === 'queue') {
        return '0%'
      } else if (tab === 'current') {
        return '50%'
      } 
    }
  };
`