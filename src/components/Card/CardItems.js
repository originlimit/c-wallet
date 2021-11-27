import styled from 'styled-components';

export const CardContainer = styled.div`
    background: black;
    display: flex;
    height: 20rem;
`
export const CardInfo = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    justify-content: center;
    align-content: center;
    padding: 1rem;
`
export const CardPicWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
`

export const CardPicture = styled.img`
    max-height: 70%;
    max-width: 90%;
`

export const CardTitle = styled.h1`
    color: #ffffff;
    margin: 1rem;
`

export const CardDesc = styled.p`
    font-size: 1.3rem;
    color: #ffffff;
    margin: .5rem;
`