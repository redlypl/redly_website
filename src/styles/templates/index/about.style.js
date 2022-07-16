import styled from "styled-components"
import { theme } from "../../theme"

import WroconsultLogo from "../../../images/wroconsult.png"

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
    padding: 0 50px;

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
    padding: 20px 0;
`
export const NormalTextBlockWrapper = styled.div`
    padding: 0 100px;

    > h1 {
        font-weight: 600;
    }
    > p {
        font-weight: 400;
    }

    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 0;
    }
`
export const ListWhatWeDoingWrapper = styled.div`

    > h1 {
        font-weight: 600;
        text-align: center;
    }
    > div {
        font-weight: 400;
        text-align: center;
    }
`
export const LogoSwapWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${theme.breakpoint.laptop}) {
        flex-direction: column;
    }
`
export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoint.laptop}) {
        flex-wrap: wrap;

        > div {
            padding: 10px 0;
        }
    }
`
export const BreakLine = styled.div`
    background-color: #B0B0B0;
    height: 25px;
    width: 2px;
    margin: 0 25px;

    @media (max-width: ${theme.breakpoint.laptop}) {
        display: none;
    }
`
export const LogoPlacement = styled.div`
    background-image: url(${WroconsultLogo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 410px;
    background-size: 100%;
    margin: 0 40px;

    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 150px;
    }
`
export const TemporaryWrapper = styled.div`
    margin: 0 100px;

    @media (max-width: ${theme.breakpoint.laptop}) {
        margin: 0;
    }
`