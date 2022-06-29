import styled from "styled-components"
import { theme } from "../../styles/theme"

export const HeaderWrapper = styled.div`
    font-size: 38px;
    line-height: 10px;
    font-weight: 600;
    
    @media (max-width: ${theme.breakpoint.desktop}) {
        font-size: 35px;
        line-height: 35px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        font-size: 32px;
        line-height: 42px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 25px;
        line-height: 35px;
    }
`