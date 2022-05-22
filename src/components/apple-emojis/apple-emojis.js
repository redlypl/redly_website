import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Emoji = styled.div`
    background-image: ${props => `url(${props.urlProp})`};
    background-position: center;
    background-size: 100%;
    height: ${props => `${props.sizeProp}px`};
    width: ${props => `${props.sizeProp}px`};
    display: inline-block;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        height: ${props => `${props.sizePropLargeDesktop}px`};
        width: ${props => `${props.sizePropLargeDesktop}px`};
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        height: ${props => `${props.sizePropDesktop}px`};
        width: ${props => `${props.sizePropDesktop}px`};
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        height: ${props => `${props.sizePropLaptop}px`};
        width: ${props => `${props.sizePropLaptop}px`};
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        height: ${props => `${props.sizePropTablet}px`};
        width: ${props => `${props.sizePropTablet}px`};
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        height: ${props => `${props.sizePropMobile}px`};
        width: ${props => `${props.sizePropMobile}px`};
    }
`

const AppleEmojis = (props) => {
    return (
        <Emoji
            urlProp={props.url}
            sizeProp={props.size}
            sizePropLargeDesktop={props.sizeLargeDesktop}
            sizePropDesktop={props.sizeDesktop}
            sizePropLaptop={props.sizeLaptop}
            sizePropTablet={props.sizeTablet}
            sizePropMobile={props.sizeMobile}
        />
    )
}

export default AppleEmojis