import styled from "styled-components"
import { theme } from "../../theme"

import clipPathPng from "../../../images/realizations-clip-path.png"
import clipPathPngMobile from "../../../images/realizations-clip-path-mobile.png"

import cursorPointer from "../../../images/cursor-pointer-finger-emoji.png"
import { Link } from "gatsby"

export const RealizacjeWrapper = styled.div`
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 0;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0 0 0;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const CategoryFilterBar = styled.div`
    padding: 30px 0;
    display: flex;
    gap: 20px;
    font-weight: 500;
    align-items: center;
    margin-left: 80px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        margin-left: 0;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        flex-wrap: wrap;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        justify-content: center;
        padding: 30px 15px;
    }
`
export const Label = styled(Link)`
    background-color: ${theme.color.silver};
    padding: 5px 10px;
    border-radius: 99px;
    font-weight: 500;
    box-shadow: 0px 3px 12px #00000011;
    cursor: pointer;
    color: black;
    text-decoration: none;
    filter: ${props => `invert(${props.invertValue})`};

    :hover {
        transform: scale(1.05);
    }

    @media (max-width: ${theme.breakpoint.laptop}) {
        margin: 0;
    }
`
export const RealizationsItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
    padding: 0 150px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
    }
`
export const RealizationItem = styled(Link)`
    height: 300px;
    width: 100%;
    box-shadow: 0px 3px 17px #00000019;
    background-color: #F5F5F5;
    border-radius: 17px;
    display: flex;
    cursor: url(${cursorPointer}), auto;
    color: black;
    text-decoration: none;

    :hover > .hoverBg {
        opacity: 1;
    }

    :hover {
        transform: scale(1.015);
    }

    @media (max-width: ${theme.breakpoint.laptop}) {
        height: 270px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        height: 250px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        height: 150px;
    }
`
export const ContentItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 60%;
    }
`
export const DecoLine = styled.div`
    background-color: black;
    height: 4px;
    width: 50px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        width: 30px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 10px;
    }
`
export const Number = styled.p`
    font-size: 40px;
    font-weight: 700;
    padding: 0 40px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 35px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0 20px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 0 15px;
        font-size: 35px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 0 15px;
        font-size: 25px;
    }
`
export const HeaderWrapperItemItem = styled.div`
    
`
export const TitleParagraph = styled.h6`
    font-size: 53px;
    line-height: 63px;
    margin: 0;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        font-size: 47px;
        line-height: 57px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        font-size: 35px;
        line-height: 45px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 20px;
        line-height: 30px;
    }
`
export const CategoryParagraph = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 17px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 14px;
        line-height: 24px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 12px;
        line-height: 22px;
    }
`
export const DateParagraph = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 12px;
        line-height: 22px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 11px;
        line-height: 21px;
    }
`
export const ThumbnailItemWrapper = styled.div`
    mask-image: url( ${clipPathPng} );
    mask-size: 100% 100%;
    height: 100%;
    width: 50%;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    opacity: 0.7;

    @media (max-width: ${theme.breakpoint.tablet}) {
        mask-image: url( ${clipPathPngMobile} );
        width: 40%;
    }
`