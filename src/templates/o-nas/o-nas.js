import React from "react"

import {
    ONasWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,

} from "../../styles/templates/o-nas/o-nas.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

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
        </ONasWrapper>
    )
}

export default ONas