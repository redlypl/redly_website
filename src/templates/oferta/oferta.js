import React from "react"

import {
    OfertaWrapper,
    HeaderWrapper,
    OfertaBody,
    OfertaItem,

} from "../../styles/templates/oferta/oferta.style"

const Oferta = () => {
    return (
        <OfertaWrapper>
        <HeaderWrapper>
            header
        </HeaderWrapper>
        <OfertaBody>
            <OfertaItem>item-1</OfertaItem>
            <OfertaItem>item-2</OfertaItem>
            <OfertaItem>item-3</OfertaItem>
            <OfertaItem>item-4</OfertaItem>
            <OfertaItem>item-5</OfertaItem>
            <OfertaItem>item-6</OfertaItem>
            <OfertaItem>item-7</OfertaItem>
            <OfertaItem>item-8</OfertaItem>
            <OfertaItem>item-9</OfertaItem>
            <OfertaItem>item-10</OfertaItem>
        </OfertaBody>
        </OfertaWrapper>
    )
}

export default Oferta