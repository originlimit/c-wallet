import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    height: 3rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    z-index: 33;
`;

export const NavContainer = styled.div`
    background: rgba(0, 0, 0, .95);
    display: flex;
    justify-content: space-between;
    height: 3rem;
    width: 100%;
`;

export const NavLogo = styled(Link)`
    color: #ffffff;
    display: flex;
    font-weight: bold;
    font-size: 1.5rem;
    margin: auto 3rem;

    @media(max-width: 47rem){
        margin: auto 2rem;
    }
`;

export const NavItemContainer = styled.div`
    display: flex;
`;

export const NavItems = styled.div`
    display: flex;

    @media(max-width: 47rem){
        display: none;
    }
`;

export const NavItem = styled(Link)`
    padding: .75rem;
    color: #ffffff;
    font-weight: bold;
`;

export const NavButton = styled(Link)`
    background: #75e1b7;
    border-radius: 1rem;
    color: #000000;
    padding: .30rem .75rem;
    margin: .5rem 3rem .5rem .75rem;
    height: 2rem;
    font-weight: bold;

    @media(max-width: 47rem){
        display: none;
    }
`;

export const NavMenu = styled.div`
    display: none;
    color: #ffffff;
    cursor: pointer;
    margin: auto 2rem;
    font-size: 1.5rem;

    @media(max-width: 47rem){
        display: flex;
    }
`;