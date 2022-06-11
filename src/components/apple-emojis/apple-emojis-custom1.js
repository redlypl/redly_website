import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

const Emoji = styled.div`
    background-image: ${props => `url(${props.urlProp})`};
    background-position: center;
    background-size: 100%;
    height: 28px;
    width: 28px;
    display: inline-block;

    @media (max-width: ${theme.breakpoint.desktop}) {height: 25px;width: 25px;}
    @media (max-width: ${theme.breakpoint.laptop}) {height: 22px;width: 22px;}
    @media (max-width: ${theme.breakpoint.tablet}) {height: 22px;width: 22px;}

`

const AppleEmojis = (props) => {
    return (
        <Emoji urlProp={props.url} />
    )
}

export default AppleEmojis