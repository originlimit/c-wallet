import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    font-size: 1.25rem;
    display: flex;
    font-weight: 600;
    padding: .5rem 1rem;
    border-radius: 2rem;
    color: #ffffff;
    background: ${({primary}) => (primary ? '#16a56e': '#000000')};
    transition: all ease-in-out 0.3s;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
        transition: all ease-in-out 0.3s;
        background: ${({primary}) => (primary ? '#04623e': '#171717')};
    }

    @media(max-width: 47rem){
        font-size: 1rem;
    }
`