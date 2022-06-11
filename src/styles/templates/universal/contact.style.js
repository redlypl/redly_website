import styled from "styled-components"
import { theme } from "../../theme"

import newsletterdecoFirst from "../../../images/contactDeco/contactdecoFirst.jpg"
import newsletterdecoSecond from "../../../images/contactDeco/contactdecoSecond.jpg"
import newsletterdecoThird from "../../../images/contactDeco/contactdecoThird.jpg"

export const ContactWrapper = styled.div`
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 30px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0;
    margin-bottom: 40px;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
        padding: 0;
    }
`
export const UnderHeaderWrapper = styled.div`

`
export const ContactBody = styled.div`
    padding: 0 150px;
    height: 550px;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    gap: 20px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 50px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
        height: 500px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        justify-content: flex-start;
        height: 850px;
        gap: 50px;
    }
`
export const ImageDeco = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContactFormWrapper = styled.div`
    width: 100%;
    height: 100%;
`
export const ImageDecorationContact = styled.div`
    background-image: url(${newsletterdecoFirst});
    background-size: cover;
    background-position: 0 50%;
    height: 85%;
    width: 85%;
    border-bottom-left-radius: 150px;
    position: relative;
    box-shadow: 0px 3px 50px #00000029;

    ::before {
        content: '';
        background-image: url(${newsletterdecoSecond});
        background-size: 120%;
        position: absolute;
        right: -25px;
        top: -25px;
        height: 100px;
        width: 170px;
        border-bottom-left-radius: 70px;
        box-shadow: 0px 3px 50px #00000029;
    }

    ::after {
        content: '';
        background-image: url(${newsletterdecoThird});
        position: absolute;
        right: -25px;
        bottom: -25px;
        height: 150px;
        width: 220px;
        border-top-left-radius: 110px;
        box-shadow: 0px 3px 50px #00000029;
    }

    @media (max-width: ${theme.breakpoint.desktop}) {
        background-position: 0 50%;
        
        ::before {
            height: 80px;
            width: 150px;
        }
        ::after {
            height: 120px;
            width: 180px;
            border-top-left-radius: 90px;
            background-size: 120%;
        }
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        height: 300px;
        width: 400px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        width: 80%;
    }
`