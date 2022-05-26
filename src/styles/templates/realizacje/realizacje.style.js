import styled from "styled-components"
import { theme } from "../../theme"

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
        padding: 25px 30px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0;
    margin-bottom: 40px;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const RealizationsItemsWrapper = styled.div`
    background-color: darkcyan;
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