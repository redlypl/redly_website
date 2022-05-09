import React from "react"

import {
    RealizacjeWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,
    RealizationItem,

} from "../../styles/templates/realizacje/realizacje.style"

const Realizacje = () => {
    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                header
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