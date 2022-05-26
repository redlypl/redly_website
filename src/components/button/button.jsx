import React from "react"
import { ButtonWrapper, ButtonLinkElement, ButtonHrefElement, ArrowElement } from "./button.style"

const Button = (props) => {
    let hrefElement = ""
    let LinkElement = <ButtonLinkElement isBiggerFontProps={props.isBiggerFont} to={ props.to }>{props.name}</ButtonLinkElement>
    let Arrow = <ArrowElement className="btnHover" />

    if ( props.isHref === true ) {
        hrefElement = <ButtonHrefElement isBiggerFontProps={props.isBiggerFont} href={props.href}>{props.name}</ButtonHrefElement>
        LinkElement = ""
    }

    return (
        <ButtonWrapper>{ hrefElement } { LinkElement } { Arrow }</ButtonWrapper>
    )
}

export default Button