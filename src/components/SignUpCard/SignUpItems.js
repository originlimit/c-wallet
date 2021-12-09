import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SignUpBG = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #0c8d5b;
    padding-bottom: 3rem;
`

export const Title = styled.h1`
    color: #ffffff;
    padding: 1rem;
    text-shadow: 1px 3px 6px black;
`

export const SignUpWrapper = styled.div`
    background: #000000;
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 30rem;
    width: 25rem;

    @media(max-width: 47rem){
        width: 90vw;
    }
`

export const Form = styled.form`
    display: flex;
    width: 100%;
    height: 85%;
    flex-direction: column;
`

export const Name = styled.label`
    color: #ffffff;
    font-weight: bold;
    padding: 0rem 0rem .5rem .5rem;
`

export const Username = styled.label`
    color: #ffffff;
    font-weight: bold;
    padding: 0rem 0rem .5rem .5rem;
`

export const Email = styled.label`
    color: #ffffff;
    font-weight: bold;
    padding: 0rem 0rem .5rem .5rem;
`

export const Input = styled.input`
    color: #000000;
    height: 2.3rem;
    width: 100%;
    border-radius: .85rem;
    border: none;
    padding-left: 1rem;
    margin-bottom: .5rem;
    font-size: 1rem;
`

export const TermsWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Checkbox = styled.input`
    color: blue;
    height: 1rem;
    width: 1rem;
    margin: .5rem;
`

export const Terms = styled.p`
    color: #ffffff;
    margin: .25rem;
`

export const SignUpBtn = styled.button`
    color: #000000;
    background: #1cce8a;
    font-weight: bold;
    font-size: 1.15rem;
    border: none;
    width: 100%;
    height: 2.5rem;
    border-radius: .85rem;
`