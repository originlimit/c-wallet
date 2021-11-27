import React from 'react'
import {CardContainer, CardPicWrapper, CardPicture, CardInfo, CardTitle, CardDesc} from './CardItems'
import {Button} from '../Button/button';

function Card(props) {
    return (
        <>
            <CardContainer>
                <CardPicWrapper>
                    <CardPicture src={props.source} alt='image'/>
                </CardPicWrapper>
                <CardInfo>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDesc>{props.information}</CardDesc>
                    <Button to='/signup'>{props.buttonTxt}</Button>
                </CardInfo>
            </CardContainer>
        </>
    )
}

export default Card