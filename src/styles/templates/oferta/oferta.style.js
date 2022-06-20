import { Link } from "gatsby"
import styled from "styled-components"

import { theme } from "../../theme"

import cursorPointer from "../../../images/cursor-pointer-finger-emoji.png"

export const OfertaWrapper = styled.div`
    padding: 50px 0 10px 0;
    display: flex;
    flex-direction: column;
    gap: 0;

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 0;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 200px 0 200px;
    margin-bottom: 40px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 25px 100px 0 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 50px 0 50px;
    }
    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
        padding: 25px 30px 0 30px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px 0 10px;
    }
`
export const OfertaBody = styled.div`
    margin-bottom: 30px;
`
export const OfertaItem = styled(Link)`
    background-color: white;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    gap: 2px;    
    cursor: url(${cursorPointer}), auto;
`
export const ImageIcon = styled.div`
    background-image: ${props => `url(${props.image})`};
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
    width: 250px;
    margin-top: -45px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        height: 200px;
        width: 200px;
    }
`
export const Title = styled.h3`
    color: black;
    font-size: 70px;
    font-weight: 900;
    margin: 15px;
    position: relative;
    text-align: center;
    width: 100%;

    @media (max-width: ${theme.breakpoint.desktop}) {
        font-size: 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 35px;
    }

    ::before {
        content: '${props => props.under}';
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        font-size: 130px;
        width: 100%;
        margin: 0;
        text-transform: uppercase;
        opacity: 0.04;
        white-space: nowrap;
        overflow: hidden;

        @media (max-width: ${theme.breakpoint.desktop}) {
            font-size: 110px;
        }
        @media (max-width: ${theme.breakpoint.tablet}) {
            font-size: 80px;
        }
    }
`
export  const Content = styled.p`
    color: black;
    text-align: center;
    font-weight: 600;
    margin: 0 350px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        margin: 0 250px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        margin: 0 200px;
        font-size: 14px;
        line-height: 19px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        margin: 0 100px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        margin: 0 20px;
    }
`
export  const ReadMore = styled.p`
    text-decoration: underline;
    color: black;
    font-weight: 600;
`