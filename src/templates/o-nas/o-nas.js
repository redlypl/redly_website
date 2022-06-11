import React from "react"

import {
    ONasWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,

} from "../../styles/templates/o-nas/o-nas.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"

const ONas = () => {
    return (
        <ONasWrapper>
            <HeaderWrapper>
                <Header
                    name="Poznajmy się"
                    emojiBase={EmojiData.handshake}
                />
            </HeaderWrapper>
            <RealizationsItemsWrapper>
                about us  - content body
            </RealizationsItemsWrapper>
            <SocialMediaInset />
        </ONasWrapper>
    )
}

export default ONas