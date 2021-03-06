import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Break = styled.div`
    height: .15rem;
    background-color: rgb(255, 255, 255, 0.1);
`

export const FooterWrapper = styled.div`
    background: #000000;
    height: 13rem;
`

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Links = styled(Link)`
    color: #ffffff;
    font-weight: 600;
    margin: 3rem 2rem;

    @media(max-width: 47rem){
        margin: 3rem .5rem;
    }
`

export const Trademark = styled.div`
    color: #a1a1a1;
    text-align: center;
`

