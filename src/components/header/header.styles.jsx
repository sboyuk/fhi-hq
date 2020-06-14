import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavOpt = styled(Link)`
    display: inline-block;
    height: 40px;
    width: 25%;
    line-height: 40px;
    font-size: 11px;
    border-top: ${({active}) => active ? '1px solid black' : 'none'};
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

export const HeaderContainer = styled.nav`
    height: 40px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
`