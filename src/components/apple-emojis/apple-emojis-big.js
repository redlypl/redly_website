import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Emoji = styled.div`
    background-image: ${props => `url(${props.urlProp})`};
    background-position: center;
    background-size: 100%;
    height: 45px;
    width: 45px;
    display: inline-block;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {height: 40px;width: 40px;}
    @media (max-width: ${theme.breakpoint.desktop}) {height: 40px;width: 40px;}
    @media (max-width: ${theme.breakpoint.laptop}) {height: 42px;width: 42px;}
    @media (max-width: ${theme.breakpoint.tablet}) {height: 35px;width: 35px;}

`

const AppleEmojis = (props) => {
    return (
        <Emoji urlProp={props.url} />
    )
}

export default AppleEmojis