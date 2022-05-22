import styled from "styled-components"
import { theme } from "../../../styles/theme"

import SculptureDecoBg from "../../../images/heroImg/sculptureDecoX.png"
import SculptureBg from "../../../images/heroImg/sculpture.png"
import WroconsultLogoBg from "../../../images/wroconsult.png"

export const HeroWrapper = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 200px 100px 200px;
    gap: 10px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 50px 50px 100px 50px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 50px 15px 100px 15px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 30px;
        flex-wrap: nowrap;
        flex-direction: column;
        gap: 50px;
    }
`
export const Top = styled.div`
    display: flex;
    height: 600px;
    
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column-reverse;
        gap: 20px;
    }
`
export const Bottom = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        text-align: center;
        height: 150px;
        gap: 25px;
        margin-top: 0;
    }
`
export const ContentSide = styled.div`
    width: calc( 60% - 5px );
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    
    @media (max-width: ${theme.breakpoint.desktop}) {
        align-items: center;
        width: calc( 50% - 5px );
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        align-items: center;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        justify-content: left;
    }
`
export const SculptureSide = styled.div`
    width: calc( 40% - 5px );
    height: 600px;
    position: relative;
    background-color: rgba(200, 200, 200);

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        width: calc( 50% - 5px );
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        
    }
    @media (max-width: ${theme.breakpoint.mobile}) {

    }

`
export const Sculpture = styled.div`
    height: 100%;
    width: 400px;
    background-size: 65%;
    background-repeat: no-repeat;
    background-image: url(${SculptureBg});
    background-position: center;
    position: absolute;
    z-index: 50;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    animation-name: moving;
    animation-duration: 5s;
    animation-iteration-count: infinite;

    @media (max-width: ${theme.breakpoint.desktop}) {
        left: 51%;
        animation-name: movingMobile;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 230px;
        background-size: 85%;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 200px;
    }

    @keyframes moving {
        0% {
            transform: translateY(-50%) rotate(0);
        }
        50% {
            transform: translateY(-47%) rotate(2deg);
        }
        75% {
            transform: translateY(-51%) rotate(-2deg);
        }
        100% {
            transform: translateY(-50%) rotate(0);
        }
    }
    @keyframes movingMobile {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }
        50% {
            transform: translate(-50%, -47%) rotate(2deg);
        }
        75% {
            transform: translate(-50%, -51%) rotate(-2deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(0);
        }
    }
`
export const DecoSculpture = styled.div`
    background-image: url(${SculptureDecoBg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 400px;
    width: 400px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${theme.breakpoint.desktop}) {
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        height: 300px;
        width: 300px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 270px;
        width: 270px;
    }
`
export const SocialMediaSection = styled.div`

`
export const PoweredBy = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 20px;
    color: ${theme.color.darkGray};

    @media (max-width: ${theme.breakpoint.tablet}) {
        justify-content: center;
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
export const WrapperContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        width: 80%;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        width: 90%;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        align-items: center;
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
        width: 100%;
        padding: 0 50px;
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
        padding: 0 50px;
    }
`