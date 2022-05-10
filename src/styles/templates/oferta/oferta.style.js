import styled from "styled-components"
import { theme } from "../../theme"

export const OfertaWrapper = styled.div`
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
export const OfertaBody = styled.div`
    background-color: lightblue;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        
    }
`
export const OfertaItem = styled.div`
    background-color: blueviolet;
    width: calc( 20% - 5px );
    height: 250px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: calc( 50% - 5px );
    }
`