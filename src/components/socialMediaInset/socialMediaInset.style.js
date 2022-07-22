import styled from "styled-components"
import { theme } from "../../styles/theme"

export const SocialMediaInsetWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Header = styled.h5`
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
    padding: 20px 0 10px 0;
    font-style: italic;
    word-spacing: 20px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 14.5px;
        word-spacing: 5px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        font-size: 11.5px;
        word-spacing: 5px;
    }
`
export const SocialList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;

    @media (max-width: ${theme.breakpoint.mobile}) {
        width: 80%;
    }
`
export const SocialLink = styled.a`
    height: 45px;
    width: 45px;

    :hover {
        transform: scale(1.1);
    }
`
export const SocialItem = styled.div`
    background-image: ${props => `url(${props.iconBg})`};
    background-size: ${props => `${props.sizeBg}`};
    background-position: center;
    background-repeat: no-repeat;
    width: 45px;
    height: 45px;
    filter: invert(1);
`