import styled from 'styled-components';

export const CardContainer = styled.div`
    /* border: 1px solid black; */
    margin: 10px 5px;
    // border-radius: 3px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* text-align: center */
`
export const RoundButton = styled.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 20px auto;
    background: white;
    font-size: 11px;
    text-align: center;
    line-height: 100px;
`
export const Time = styled.div`
    text-align: center;
    font-size: 45px;
`
export const RectangularButton = styled.button`
    border: 1px solid black;
    border-radius: 0px;
    height: 2rem;
    background: none;
    margin: 25px 0;
    
    /* color: white; */
`