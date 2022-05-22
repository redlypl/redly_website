import styled, { keyframes } from "styled-components"
import { theme } from "../../../styles/theme"

import SculptureDecoBg from "../../../images/heroImg/sculptureDecoX.png"
import SculptureBg from "../../../images/heroImg/sculpture.png"
import WroconsultLogoBg from "../../../images/wroconsult.png"
import gradientCircle from "../../../images/gradientCircle.png"

export const HeroWrapper = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 200px 100px 200px;
    gap: 10px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 50px 50px 100px 50px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 50px 15px 100px 15px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 20px;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: flex-start;
        gap: 40px;
        height: 750px;
    }
`
export const Top = styled.div`
    display: flex;
    height: 600px;
    width: 80%;
    gap: 10px;
    background-image: url(${gradientCircle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation-name: circleSlideV;
    animation-duration: 1s;
    
    @media (max-width: ${theme.breakpoint.desktop}) {
        width: 90%;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 100%;
        background-size: 50%;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column-reverse;
        background-image: none;
    }
    
    @keyframes circleSlideV {
        from {
            background-position: center -1000px;
        }
        to {
            background-position: center;
        }
    }
`
export const Bottom = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        text-align: center;
        height: 100px;
        gap: 25px;
        margin-top: 0;
    }
`
export const ContentSide = styled.div`
    width: calc( 50% - 5px );
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    overflow: hidden;
    
    @media (max-width: ${theme.breakpoint.desktop}) {

    }
    @media (max-width: ${theme.breakpoint.laptop}) {
       
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        height: calc( 50% - 5px );
    }
`
export const SculptureSide = styled.div`
    width: calc( 50% - 5px );
    height: 600px;
    overflow: hidden;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {

    }
    @media (max-width: ${theme.breakpoint.desktop}) {
    
    }
    @media (max-width: ${theme.breakpoint.laptop}) {

    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        height: calc( 50% - 5px );
        display: flex;
        justify-content: center;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {

    }

`
export const Sculpture = styled.div`
    height: 100%;
    width: 70%;
    background-size: 65%;
    background-repeat: no-repeat;
    background-image: url(${SculptureBg});
    background-position: center;
    animation-name: slideSculpN;
    animation-duration: 2s;

    @media (max-width: ${theme.breakpoint.desktop}) {

    }
    @media (max-width: ${theme.breakpoint.laptop}) {


    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 160px;
        background-size: 100%;
    }

    @keyframes slideSculpN {
        0% {
            background-position: 1000px center;
        }
        75% {
            background-position: calc( 50% + -25px ) center;
        }
        100% {
            background-position: center;
        }
    }
`
export const DecoSculpture = styled.div`
    background-image: url(${SculptureDecoBg});
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: bgSlideD;
    animation-duration: 2s;

    @media (max-width: ${theme.breakpoint.desktop}) {

    }
    @media (max-width: ${theme.breakpoint.laptop}) {

    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 280px;
        background-size: 100%;
    }

    @keyframes bgSlideD {
        0% {
            background-position: 1000px center;
        }
        75% {
            background-position: calc( 50% + -25px ) center;
        }
        100% {
            background-position: center;
        }
    }
`
export const SocialMediaSection = styled.div`
    animation-name: slideBottomG;
    animation-duration: 1.5s;

    @keyframes slideBottomG {
        from {
            transform: translateY(200px);
        }
        to {
            transform: translateY(0);
        }
    }
`
export const PoweredBy = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 20px;
    color: ${theme.color.darkGray};
    animation-name: slideBottomG;
    animation-duration: 2s;

    @media (max-width: ${theme.breakpoint.tablet}) {
        justify-content: center;
    }

    @keyframes slideBottomG {
        from {
            transform: translateY(200px);
        }
        to {
            transform: translateY(0);
        }
    }
`
export const WroconsultLogo = styled.a`
    background-image: url(${WroconsultLogoBg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(1);
    width: 120px;
    height: 100%;

    :hover {
        transform: scale(1.1);
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        background-size: 80%;
    }
`
export const SocialItem = styled.a`
    text-decoration: none;
    font-size: 17px;
    color: ${theme.color.black};
    font-weight: 500;
    position: relative;

    :hover {
        margin-left: 6px;
    }
    ::before {
        content: '';
        background-image: url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/backhand-index-pointing-right_1f449.png');
        background-size: 100%;
        height: 30px;
        width: 30px;
        position: absolute;
        right: -25px;
        top: -55px;
        transform: rotate(120deg);
        opacity: 0;
    }
    :hover::before{
        right: -5px;
        top: -32px;
        opacity: 1;
    }
`
export const Header = styled.div`
    font-size: 45px;
    line-height: 55px;
    font-weight: 600;

    @media (max-width: ${theme.breakpoint.desktop}) {
        font-size: 3.4vw;
        line-height: calc( 3.4vw + 10px );
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        font-size: 3.8vw;
        line-height: calc( 3.8vw + 10px );
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 5vw;
        line-height: calc( 5vw + 10px );
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 8.5vw;
        line-height: calc( 8.5vw + 10px );
    }
`
export const UnderHeader = styled.div`
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
    width: 80%;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        width: 70%;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        font-size: 1.2vw;
        line-height: calc( 1.2vw + 7px );
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        font-size: 1.7vw;
        line-height: calc( 1.7vw + 5px );
        width: 100%;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 2.5vw;
        line-height: calc( 2.5vw + 5px );
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 3.5vw;
        line-height: calc( 3.5vw + 7px );
    }
`