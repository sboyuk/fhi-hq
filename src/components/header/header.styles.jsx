import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavOpt = styled(Link)`
    display: inline-block;
    height: 40px;
    width: 25%;
    line-height: 40px;
    font-size: .75rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

export const HeaderContainer = styled.nav`
    height: 40px;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    background-color: white;
`