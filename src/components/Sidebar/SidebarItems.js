import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.div`
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    background: rgba(0, 0, 0, .97);
`;

export const SidebarClose = styled.button`
    justify-content: center;
    padding: .50rem 1.85rem 0rem 0rem;
    cursor: pointer;
    font-size: 1.75rem;
    height: 4rem;
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
    height: 80%;
    justify-content: space-evenly;
    padding: auto 2rem;
    padding-bottom: 4rem;
`;

export const SidebarItem = styled(Link)`
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;

    &:hover {
        color: #1cce8a;
        transition: 0.3s ease-in-out;
    }
`;

export const SidebarFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 .5rem;
`;

export const FooterItem = styled(Link)`
    color: #999999;
`;