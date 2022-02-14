import React from 'react'
import {CardContainer, CardPicWrapper, CardPicture, CardInfo, CardTitle, CardDesc} from './CardItems'

function Card(props) {
    return (
        <>
            <CardContainer kkey={props.kkey}>
                { props.kkey === 2 ? null : <CardPicWrapper><CardPicture src={props.source} alt='image'/></CardPicWrapper> }
                <CardInfo>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDesc>{props.information}</CardDesc>
                </CardInfo>
                { props.kkey === 2 ? <CardPicWrapper><CardPicture src={props.source} alt='image'/></CardPicWrapper> : null }
            </CardContainer>
        </>
    )
}

export default Card