import styled from "styled-components"
import { theme } from "../../styles/theme"

export const FooterWrapper = styled.div`
    background-image: ${theme.gradient.darkGray};
    height: 65px;
    display: flex;
    justify-content: center;
`
export const FooterContent = styled.div`
    height: 100%;
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-style: italic;
    font-size: 15px;
    font-weight: 400;
`
export const BreakVerticalLine = styled.div`
    height: 50%;
    width: 1px;
    background-color: white;
`
export const SocialMediaBar = styled.div`
    display: flex;
    gap: 10px;
`
export const SocialLink = styled.a`
    height: 30px;
    width: 30px;

    :hover {
        transform: scale(1.25);
    }
`
export const SocialItem = styled.div`
    background-image: ${props => `url(${props.iconBg})`};
    background-size: ${props => `${props.sizeBg}`};
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`