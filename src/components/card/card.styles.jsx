import styled from 'styled-components';

export const CardContainer = styled.div`
    /* border: 1px solid black; */
    margin: 10px 10px;
    /* border-radius: 3px; */
    /* padding: 15px; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* text-align: center */
`
export const RoundButton = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    line-height: 150px;
    border: 1px solid black;
    margin: 30px auto  auto;
    background: white;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
`
export const Time = styled.div`
    margin-top: 50px;
    text-align: center;
    font-size: 3.4rem;
`

export const CenterMessage = styled.div`
    text-align: center;
    margin: 10px 0 40px 0;
    opacity: ${({opacity}) => opacity};
`