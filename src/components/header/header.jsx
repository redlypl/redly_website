import React from "react"

import {
    HeaderWrapper,

} from "./header.style"

import EmojiHeader from "../apple-emojis/apple-emojis-header"

const Header = (props) => {
    return (
        <HeaderWrapper>
            {props.name}
            &nbsp;
            <EmojiHeader url={props.emojiBase} />
        </HeaderWrapper>
    )
}

export default Header