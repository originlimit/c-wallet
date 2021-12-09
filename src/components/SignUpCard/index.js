import React from "react"
import {SignUpBG, Title, SignUpWrapper, Form, Name, Input, Username, Email, SignUpBtn} from './SignUpItems'

function SignUpCard() {
    return (
        <>
            <SignUpBG>
                <Title>C-Wallet</Title>
                <SignUpWrapper>
                    <Form>
                        <Name>Name:<br/></Name>
                        <Input /><br/>
                        <Username>Username:<br/></Username>
                        <Input /><br/>
                        <Email>E-Mail:</Email>
                        <Input /><br/>
                    </Form>
                    <SignUpBtn type="button" onClick={null}>Continue</SignUpBtn>
                </SignUpWrapper>
            </SignUpBG>
        </>
    )
}

export default SignUpCard
