import React from 'react'
import {FooterWrapper, LinksWrapper, Links, Trademark} from './FooterItems'

function Footer() {
    return (
        <>
            <FooterWrapper>
                <LinksWrapper>
                    <Links>About Us</Links>
                    <Links>Contact Us</Links>
                    <Links>Policies</Links>
                    <Links>Terms</Links>
                </LinksWrapper>
                <Trademark>© 2021 Fictional Company </Trademark>
            </FooterWrapper>
        </>
    )
}

export default Footer
