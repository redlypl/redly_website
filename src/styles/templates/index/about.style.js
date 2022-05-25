import styled from "styled-components"
import { theme } from "../../theme"

export const AboutWrapper = styled.div`
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 50px 100px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 50px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 30px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const AboutBody = styled.div`
    background-color: lightblue;
    height: 450px;
    display: flex;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        gap: 10px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        height: 700px;
    }
`
export const ContentSide = styled.div`
    background-color: blueviolet;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const InsideContentHalf = styled.div`
    background-color: bisque;
    display: flex;
    gap: 10px;
    height: 100%;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        gap: 5px;
    }
`
export const ImagePlace = styled.div`
    background-color: tomato;
    width: 100%;
    height: 100%;
`
export const BtnWrapper = styled.div`
    background-color: pink;
    padding: 20px 0;
`
