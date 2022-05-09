import styled from "styled-components"
import { theme } from "../../styles/theme"

export const NavbarWrapper = styled.div`
    background-color: blanchedalmond;
    height: 100px;
    width: 100%;
    padding: 0 100px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 0 25px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        height: 85px;
        padding: 0 15px;
    }
`