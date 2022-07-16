import styled from "styled-components"
import { theme } from "../../theme"

import WroconsultLogo from "../../../images/wroconsult.png"

export const ONasWrapper = styled.div`
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
    margin-bottom: 20px;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const RealizationsItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5px;
    padding: 0 150px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
    }
`
export const RealizationItem = styled.div`
    background-color: honeydew;
    height: 300px;
    width: 100%;

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
    margin-bottom: 50px;

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