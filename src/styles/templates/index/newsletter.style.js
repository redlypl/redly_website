import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../theme"

import newsletterdecoFirst from "../../../images/newsletterDeco/newsletterdecoFirst.jpg"
import newsletterdecoSecond from "../../../images/newsletterDeco/newsletterdecoSecond.jpg"
import newsletterdecoThird from "../../../images/newsletterDeco/newsletterdecoThird.jpg"

import arrowRight from "../../../images/arrowRight.png"
import successIcon from "../../../images/successIcon.png"

export const NewsletterWrapper = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 10px;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 200px;

    @media (max-width: ${ theme.breakpoint.desktop }) {
        padding: 25px 50px;
    }
    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
        padding: 0 10px;
    }
`
export const NewsletterBody = styled.div`
    padding: 0 350px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    position: relative;

    ::before {
        content: '';
        background-color: #F0F0F0;
        width: 100%;
        height: 250px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
    }

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 250px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0 100px;
        height: 400px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 0 50px;
        height: 400px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        justify-content: flex-start;
        height: 600px;
        padding: 0;
        gap: 50px;

        ::before {
            display: none;
        }
    }
`
export const SignSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageDecoSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageDecorationNewsletter = styled.div`
    background-image: url(${newsletterdecoFirst});
    background-size: cover;
    background-position: 30% 0;
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
        background-position: 50% 0;
        
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
export const FormWrapper = styled.div`
    width: 500px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${theme.breakpoint.laptop}) {
        height: 185px;
        width: 400px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        align-items: center;
    }
`
export const SignHeader = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
    padding-bottom: 10px;

    @media (max-width: ${theme.breakpoint.tablet}) {
        font-size: 20px;
        line-height: 25px;
        width: 300px;
    }
`
export const InputSign = styled.input`
    height: 55px;
    width: 420px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-top-left-radius: 20px;
    padding-left: 20px;

    ::placeholder {
        opacity: 0.70;
    }
    :focus {
        border: none;
        outline: none;
        background-color: #E9E6E6;
    }

    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 320px;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        width: 250px;
    }
`
export const AcceptParagraph = styled.div`
    font-size: 9px;
    line-height: 14px;

    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 320px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 300px;
    }
`
export const SubmitButton = styled.button`
    height: 55px;
    width: 55px;
    border: none;
    background-color: #292929;
    position: relative;

    ::before {
        content: '';
        height: 55px;
        width: 55px;
        background-image: url(${arrowRight});
        background-size: 35%;
        background-repeat: no-repeat;
        background-position: 50% 53%;
        position: absolute;
        left: 0;
        top: 0;
    }
    :hover::before {
        transform: scale(1.1);  
    }
    :hover {
        background-color: #383834;
    }
`
export const InputSubmitWrapper = styled.form`
    display: flex;
    height: 60px;
`
export const LinkTo = styled(Link)`
    text-decoration: underline;
    color: black;
`
export const ErrorMessage = styled.p`
    margin: 5px 0;
    font-weight: 600;
    font-size: 12px;
    color: #ff3636;
    animation-name: appear;
    animation-duration: 1s;

    @keyframes appear {
        from {
            opacity: 0;
            display: none;
            height: 0;
        }
        to {
            opacity: 1;
            display: block;
            height: auto;
        }
    }
`
//success content
export const SuccessMessageWrapper = styled.div`
    display: flex;
    gap: 20px;
    height: 130px;
    animation-name: appearInfo;
    animation-duration: 1s;

    @keyframes appearInfo {
        from {
            display: none;
            opacity: 0;
            height: 0;
        }
        to {
            display: flex;
            opacity: 1;
            height: 130px;
        }
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 0 40px;
        width: 100%;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 0 10px;
        flex-direction: column;
        height: 200px;
    }
`
export const ContentParagraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoint.mobile}) {
        gap: 10px;
    }
`
export const SuccessHeader = styled.h4`
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
`
export const ContentSuccessParagaph = styled.p`
    font-size: 13px;
    line-height: 17px;
    margin: 0;
`
export const IconSuccessWrapper = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoint.mobile}) {
        width: 100%;
        height: 80px;
    }
`
export const SuccessIcon = styled.div`
    background-color: white;
    height: 70px;
    width: 70px;
    border-radius: 500px;
    position: relative;

    ::before {
        content: '';
        background-image: url(${successIcon});
        background-size: 34%;
        background-position: 50% 52%;
        background-repeat: no-repeat;
        width: 70px;
        height: 70px;
        position: absolute;
        left: 0;
        top: 0;
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
        height: 50px;
        width: 50px;

        ::before {
            width: 50px;
            height: 50px;
        }
    }
`