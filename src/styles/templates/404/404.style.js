import styled from "styled-components"
import { theme } from "../../../styles/theme"

import SculptureDecoBg from "../../../images/heroImg/sculptureDecoX.png"
import SculptureBg from "../../../images/heroImg/sculpture.png"
import gradientCircle from "../../../images/gradientCircle.png"

export const HeroWrapper = styled.div`
    height: 725px;
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
        height: 650px;
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
export const ContentSide = styled.div`
    width: calc( 50% - 5px );
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    overflow: hidden;
    
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        height: calc( 50% - 5px );
        align-items: center;
        gap: 15px;
    }
`
export const SculptureSide = styled.div`
    width: calc( 50% - 5px );
    height: 600px;
    overflow: hidden;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        height: calc( 50% - 5px );
        display: flex;
        justify-content: center;
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
export const Header = styled.div`
    font-size: 45px;
    line-height: 55px;
    font-weight: 600;
    background-color: ${theme.color.silver};
    padding: 5px;

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
        text-align: center;
        background-color: transparent;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 8.5vw;
        line-height: calc( 8.5vw + 10px );
    }
`
export const B = styled.b`
    font-size: 45px;

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