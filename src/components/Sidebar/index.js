import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {SidebarContainer, SidebarClose, SidebarItems, SidebarItem, SidebarIcon, SidebarFooter, FooterItem} from './SidebarItems';

function Sidebar({toggle}) {
    return (
        <SidebarContainer>
            <SidebarIcon>
                <SidebarClose onClick={toggle}>
                    <FaTimes/>
                </SidebarClose>
            </SidebarIcon>
            <SidebarItems>
                <SidebarItem to='/'>Home</SidebarItem>
                <SidebarItem to='/'>About</SidebarItem>
                <SidebarItem to='/'>Contact</SidebarItem>
                <SidebarItem to='/'>Sign Up</SidebarItem>
            </SidebarItems>
            <SidebarFooter>
                <FooterItem to='/'>Privacy Policy</FooterItem>
                <FooterItem to='/'>Terms & Conditions</FooterItem>
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar;
