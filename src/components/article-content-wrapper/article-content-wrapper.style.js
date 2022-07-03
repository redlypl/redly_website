import styled from "styled-components"
import { theme } from "../../styles/theme"

import wroconsult_thumb_demo from "../../images/demo/wroconsult_thumb.png"
import wroconsult_logo_demo from "../../images/wroconsult.png"

import quoteImg from "../../images/quote_symbol.png"

export const ContentWrapper = styled.div`
    margin: 80px 200px 20px 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        gap: 15px;
        margin: 80px 100px 20px 100px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        margin: 80px 50px 20px 50px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        margin: 80px 10px 20px 10px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        margin: 50px 0 20px 0;
    }
`
export const WideBlock = styled.div`
    height: 600px;
    width: calc(1200px + 25px);
    display: flex;
    box-shadow: 0 3px 99px rgba(0, 0, 0, 0.04);
    border-radius: 30px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        height: 550px;
        width: calc(1100px + 15px);
    }
    @media (max-width: 1324px) {
        flex-direction: column;
        height: calc(550px * 2);
        width: 100%;
        align-items: center;
        box-shadow: none;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const Col = styled.div`
    height: 600px;
    width: calc(600px + 25px / 2);
    border-radius: ${({isSecond}) => isSecond ? "0 30px 30px 0" : "30px 0 0 30px"};

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        height: 550px;
        width: calc(1100px + 15px);
    }
    @media (max-width: 1324px) {
        height: 550px;
        width: 700px;
        border-radius: ${({isSecond}) => isSecond ? "0 0 30px 30px" : "30px 30px 0 0"};
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        border-radius: 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        height: ${({isWantMoreSpace}) => isWantMoreSpace ? 'auto' : '550px'};
    }
`
export const ShortWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        gap: 15px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const ShortBlock = styled.div`
    border-radius: 30px;
    box-shadow: 0 3px 99px rgba(0, 0, 0, 0.04);
    height: 600px;
    width: 600px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        gap: 15px;
        height: 550px;
        width: 550px;
    }
    @media (max-width: 1324px) {
        gap: 15px;
        height: 550px;
        width: 700px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        border-radius: 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        height: ${({isWantMoreSpace}) => isWantMoreSpace ? 'auto' : '550px'};
    }
`
//content
export const MainThumbnailImage = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${wroconsult_thumb_demo});
    background-position: center;
    background-size: cover;
    border-radius: 0 30px 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 1324px) {
        border-radius: 0 0 30px 30px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        border-radius: 0;
    }
`
export const ClientLogo = styled.div`
    height: 100px;
    width: 200px;
    background-image: url(${wroconsult_logo_demo});
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    filter: grayscale(1);
`
export const CreatedAtParagraph = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 17px;
    padding: 25px 35px;
    text-shadow: 0px 0px 50px rgba(0,0,0,0.5);
`
export const ColWrapperPosition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
export const HeaderSection = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 25px;
    
    > h1 {
        margin: 0;
        font-size: 55px;
        line-height: 55px;

        @media (max-width: ${theme.breakpoint.mobile}) {
            font-size: 35px;
            line-height: 35px;
        }
    }
    > h2 {
        margin: 0;
        font-size: 25px;
        line-height: 25px;
        margin-top: 5px;

        @media (max-width: ${theme.breakpoint.mobile}) {
            font-size: 20px;
            line-height: 20px;
        }
    }
`
export const ChannelsServicesSection = styled.div`
    padding: 0 30px;

    > h3 {
        text-transform: uppercase;
        margin: 0;
    }
`
export const DescriptionSection = styled.div`
    margin: 30px;

    > p {
        font-weight: 500;
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
        margin: 0 30px;
    }
`
export const ListIcon = styled.div`
    height: 21px;
    width: 21px;
    background-image: ${props => `url(${props.icon})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(1);
    margin-right: 5px;
`
export const ListDot = styled.div`
    height: 12px;
    width: 12px;
    background-color: black;
    border-radius: 500px;
    margin-right: 5px;
`
export const AboutClientWarpper = styled.div`
    padding: 10px 30px;
    color: ${({isWhiteFont}) => isWhiteFont ? 'white' : 'black'};

    > h1 {
        text-transform: uppercase;
        width: 250px;
        font-size: 33px;
        line-height: 39px;
        font-weight: 700;
    }
    > p {
        font-weight: 500;
        font-size: 17px;
        margin-top: 45px;
        line-height: 28px;
    }
`
export const PhotoBanner = styled.div`
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    border-radius: 30px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        border-radius: 0;
    }
`
export const ClientOpinionWrapper = styled.div`
    background-color: red;
    height: 100%;
    width: 100%;
    border-radius: 30px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        text-transform: uppercase;
        font-size: 33px;
        line-height: 39px;
        font-weight: 700;
        color: white;
        width: 100%;
    }

    @media (max-width: 1324px) {
        width: 700px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        border-radius: 0;
    }
`
export const OpinionWrapper = styled.div`
    width: 550px;
    height: 400px;
    margin-top: 50px;
    
    > p {
        font-weight: 400;
        font-style: italic;
        text-align: center;
        color: white;
    }
`
export const Quote = styled.div`
    height: 85px;
    width: 85px;
    background-image: url(${quoteImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${({isRotated}) => isRotated ? 'rotate(180deg)' : 'rotate(0)'};
`