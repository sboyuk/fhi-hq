import styled from 'styled-components';

const CardContainer = styled.div`
    border: ${({border}) => border ? "1px solid black": 'none'};
    margin: 20px;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export default CardContainer



