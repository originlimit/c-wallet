import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {SidebarContainer, SidebarClose, SidebarItems, SidebarItem, SidebarIcon, SidebarFooter, FooterItem} from './SidebarItems';

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarIcon>
                <SidebarClose onClick={toggle}>
                    <FaTimes/>
                </SidebarClose>
            </SidebarIcon>
            <SidebarItems>
                <SidebarItem to='/'>Home</SidebarItem>
                <SidebarItem to='/'>About</SidebarItem>
                <SidebarItem to='/'>Contact</SidebarItem>
                <SidebarItem to='/signup'>Sign Up</SidebarItem>
            </SidebarItems>
            <SidebarFooter>
                <FooterItem to='/terms'>Privacy Policy</FooterItem>
                <FooterItem to='/terms'>Terms & Conditions</FooterItem>
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar;
