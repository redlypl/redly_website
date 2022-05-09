import React from "react"

import {
    OfertaWrapper,
    HeaderWrapper,
    RealizationsItemsWrapper,
    RealizationItem,

} from "../../styles/templates/realizacje/realizacje.style"

const Oferta = () => {
    return (
        <OfertaWrapper>
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
        </OfertaWrapper>
    )
}

export default Oferta