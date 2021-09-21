import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.div`
    display: none;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, .95);

    @media(max-width: 47rem){
        display: block;
    }
`;

export const SidebarClose = styled.button`
    justify-content: center;
    padding: .50rem 1.85rem 0rem 0rem;
    cursor: pointer;
    font-size: 1.75rem;
    height: 3rem;
    background: transparent;
    border: none;
    color: #ffffff;
`;

export const SidebarIcon = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85%;
    justify-content: space-evenly;
    padding: auto 2rem;
    padding-bottom: 4rem;
`;

export const SidebarItem = styled(Link)`
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
`;

export const SidebarFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 .5rem;
`;

export const FooterItem = styled(Link)`
    color: #999999;
`;