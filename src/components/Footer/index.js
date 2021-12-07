import React from 'react'
import {FooterWrapper, LinksWrapper, Links, Trademark, Break} from './FooterItems'

function Footer() {
    return (
        <>
            <FooterWrapper>
                <Break></Break>
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
