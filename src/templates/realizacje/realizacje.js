import React from "react"

import {
    RealizacjeWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,
    RealizationItem,

} from "../../styles/templates/realizacje/realizacje.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const Realizacje = () => {
    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                <Header
                    name="Wszystkie realizacje"
                    emojiBase={EmojiData.hammer}
                />
            </HeaderWrapper>
            <RealizationsItemsWrapper>
                <RealizationItem>first-item</RealizationItem>
                <RealizationItem>second-item</RealizationItem>
                <RealizationItem>third-item</RealizationItem>
                <RealizationItem>first-item</RealizationItem>
                <RealizationItem>second-item</RealizationItem>
                <RealizationItem>third-item</RealizationItem>
                <RealizationItem>first-item</RealizationItem>
                <RealizationItem>second-item</RealizationItem>
                <RealizationItem>third-item</RealizationItem>
            </RealizationsItemsWrapper>
        </RealizacjeWrapper>
    )
}

export default Realizacje