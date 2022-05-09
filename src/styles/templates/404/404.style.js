import styled from "styled-components"
import { theme } from "../../../styles/theme"

export const HeroWrapper = styled.div`
    background-color: blueviolet;
    height: 800px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 200px 100px 200px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 50px 100px 100px 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 50px 50px 100px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        height: calc( 100vh - 85px );
        padding: 30px;
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
`
export const ContentSide = styled.div`
    background-color: bisque;
    width: 50%;
    height: 600px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const SculptureSide = styled.div`
    background-color: darkgray;
    width: 50%;
    height: 600px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const SocialMediaSlide = styled.div`
    background-color: violet;
    width: 100%;
    height: 50px;
    
    @media (max-width: ${theme.breakpoint.tablet}) {
        display: none;
    }
`