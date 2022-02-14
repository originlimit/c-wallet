import styled from 'styled-components';

export const CardContainer = styled.div`
    background: black;
    display: flex;
    height: 30rem;
    padding: 2rem;
    background: ${({kkey}) => (kkey === 2 ? '#0c734c' : '#000000')};

    @media(max-width: 47rem){
        padding: 0rem;
        flex-direction: ${({kkey}) => (kkey === 2 ? 'column-reverse' : 'column')};
        justify-content: center;
        align content: center;
        height: 35rem;
    }
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 50%;
    justify-content: center;
    align-content: center;
    padding: 1rem;

    @media(max-width: 47rem){
        max-width: 100%;
    }
`
export const CardPicWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
    max-height: 100%;
    padding: 2rem;

    @media(max-width: 47rem){
        padding: 0rem;
        width: 100%;
        max-height: 50%;
    }
`

export const CardPicture = styled.img`
    height: 90%;
    width: 100%;

    @media(max-width: 47rem){
        max-height: 75%;
        max-width: 90%;
    }
`

export const CardTitle = styled.h1`
    color: #ffffff;
    margin: 1rem;

    @media(max-width: 47rem){
        font-size: 1.5rem;
    }
`

export const CardDesc = styled.p`
    font-size: 1.35rem;
    color: #ffffff;
    margin: .5rem;

    @media(max-width: 47rem){
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
`