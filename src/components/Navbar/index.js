import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavContainer, NavLogo, NavItemContainer, NavItems, NavItem, NavButton, NavMenu} from './NavItems';

function Navbar(){
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>C-Wallet</NavLogo>
                    <NavItemContainer>
                        <NavMenu>
                            <FaBars/>
                        </NavMenu>
                        <NavItems>
                            <NavItem to='home'>Home</NavItem>
                            <NavItem to='about'>About</NavItem>
                            <NavItem to='contact'>Contact</NavItem>
                            <NavButton to='signup'>Sign Up</NavButton>
                        </NavItems>
                    </NavItemContainer>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
