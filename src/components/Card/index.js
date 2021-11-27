import React from 'react'
import {CardContainer, CardPicture, CardInfo, CardTitle, CardDesc} from './CardItems'

function Card(props) {
    return (
        <>
            <CardContainer>
                <CardPicture src={props.source} alt='image'/>
                <CardInfo>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDesc>{props.information}</CardDesc>
                </CardInfo>
            </CardContainer>
        </>
    )
}

export default Card