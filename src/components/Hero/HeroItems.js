import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    height: 36rem;
    position: relative;
    z-index: 1;

    :before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.95));
        z-index: 2;
    }
`

export const HeroBG = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000000;
`
export const HeroContent = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 2rem;
    text-align: center;

    @media(max-width: 47rem){
        font-size: 1.5rem;
    }
`

export const HeroP = styled.div`
    color #ffffff;
    font-size: 1.35rem;
    text-align: center;
    padding: 1rem 0;

    @media(max-width: 47rem){
        font-size: 1.2rem;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 1.7rem;
    z-index: 2;
    height: 3rem;
`
