import React from "react"
import {SignUpBG, Title, SignUpWrapper, Form, Name, Input, Username, Email, TermsWrapper, Checkbox, Terms, SignUpBtn} from './SignUpItems'

function SignUpCard() {
    return (
        <>
            <SignUpBG>
                <Title to='/'>C-Wallet</Title>
                <SignUpWrapper>
                    <Form>
                        <Name>Name:<br/></Name>
                        <Input /><br/>
                        <Username>Username:<br/></Username>
                        <Input /><br/>
                        <Email>E-Mail:</Email>
                        <Input /><br/>
                        <TermsWrapper>
                            <Checkbox type='checkbox'/>
                            <Terms>
                                I have read and accept the <a href='#'>Terms and Conditions</a>
                            </Terms>
                        </TermsWrapper>
                    </Form>
                    <SignUpBtn type='button' onClick={null}>Continue</SignUpBtn>
                </SignUpWrapper>
            </SignUpBG>
        </>
    )
}

export default SignUpCard
