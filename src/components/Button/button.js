import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    font-size: 1.25rem;
    width: 9rem;
    display: flex;
    font-weight: 600;
    padding: .5rem 1rem;
    border-radius: 2rem;
    color: ${({primary}) => (primary ? '#ffffff': '#000000')};
    background: ${({primary}) => (primary ? '#16a56e': '#ffffff')};
    transition: all ease-in-out 0.3s;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
        transition: all ease-in-out 0.3s;
        background: ${({primary}) => (primary ? '#ffffff': '#000000')};
        color: ${({primary}) => (primary ? '#000000': '#ffffff')};
    }

    @media(max-width: 47rem){
        width: 7.3rem;
        font-size: 1rem;
    }
`