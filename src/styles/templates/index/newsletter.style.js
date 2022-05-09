import styled from "styled-components"
import { theme } from "../../theme"

export const NewsletterWrapper = styled.div`
    background-color: forestgreen;
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
        padding: 25px 30px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px;
    }
`
export const HeaderWrapper = styled.div`
    background-color: fuchsia;
    padding: 25px 0;
`
export const NewsletterBody = styled.div`
    background-color: lightblue;
    padding: 0 150px;
    height: 450px;
    display: flex;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
        height: 400px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        justify-content: flex-start;
        height: 700px;
    }
`
export const SignSide = styled.div`
    background-color: blueviolet;
    width: 100%;
    height: 100%;
`
export const ImageDecoSide = styled.div`
    background-color: chocolate;
    width: 100%;
    height: 100%;
`
