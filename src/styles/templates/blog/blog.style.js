import styled from "styled-components"
import { theme } from "../../theme"

export const ArticlesWrapper = styled.div`
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
    background-color: antiquewhite;
    padding: 25px 0;
`
export const ArticlesItemsWrapper = styled.div`
    background-color: lightgreen;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 0 150px;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
    }
`
export const ArticleItem = styled.div`
    background-color: crimson;
    height: 350px;
    width: 32%;

    @media (max-width: ${theme.breakpoint.desktop}) {

    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 49%;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const BtnWrapper = styled.div`
    background-color: burlywood;
    padding: 20px 0;
`
