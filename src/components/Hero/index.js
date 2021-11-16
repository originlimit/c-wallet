import React, { useState } from 'react'
import {HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroItems';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';
import Video from '../../assets/video.mp4';
import {Button} from '../Button/button';

function Hero(){
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBG>
                <HeroContent>
                    <HeroH1>The Most Secure Crypto Wallet</HeroH1>
                    <HeroP>Get 10% off on sign-up by taking our user survey!</HeroP>
                    <HeroBtnWrapper>
                        <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true'>Sign Up {hover ? <MdArrowForward/> : <MdKeyboardArrowRight/>}</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero;
