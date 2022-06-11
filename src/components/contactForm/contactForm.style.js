import styled from "styled-components"
import { Link } from "gatsby"

import { theme } from "../../styles/theme"

import arrowRight from "../../images/arrowRight.png"
import successIcon from "../../images/successIcon.png"

export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const InputSubmitWrapper = styled.form`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90%;
    gap: 10px;
`
export const InputSign = styled.input`
    height: 55px;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-top-left-radius: 20px;
    padding-left: 20px;
    border-right: 4px solid black;

    ::placeholder {
        opacity: 0.70;
    }
    :focus {
        outline: none;
        background-color: #E9E6E6;
        border-right: 4px solid black;
    }

    @media (max-width: ${theme.breakpoint.laptop}) {
        width: 100%;
    }
`
export const TextArea = styled.textarea`
    resize: none;
    height: 200px;
    border: none;
    border-top-left-radius: 20px;
    padding: 18px 20px 0 20px;
    border-right: 4px solid black;
    font-size: 14.5px;
    font-weight: 600;
    font-family: 'Poppins';
    background-color: white;

    ::placeholder {
        opacity: 0.70;
    }
    :focus {
        outline: none;
        background-color: #E9E6E6;
        border-right: 4px solid black;
    }
    ::-webkit-scrollbar {
        width: 2px;
    }
`
export const AcceptParagraph = styled.div`
    font-size: 11px;
    line-height: 16px;
    font-weight: 600;

    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
    }
`
export const LinkTo = styled(Link)`
    text-decoration: underline;
    color: black;
`
export const ButtonPosition = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`
export const SubmitButton = styled.button`
    height: 55px;
    width: 280px;
    border: none;
    background-color: white;
    position: relative;
    font-size: 14.5px;
    font-weight: 600;
    border-top-left-radius: 20px;
    padding-right: 55px;
    color: #949494;

    ::before {
        content: '';
        height: 55px;
        width: 55px;
        background-image: url(${arrowRight});
        background-color: #292929;
        background-size: 35%;
        background-repeat: no-repeat;
        background-position: 50% 53%;
        border-bottom-left-radius: 20px;
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
    }
    :hover::before {
        background-image: url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/backhand-index-pointing-right_1f449.png');
        background-size: 42%;
        animation-name: show;
        animation-duration: 0.2s;
    }
    :hover {

    }

    @keyframes show {
        from {
            background-position: -70px 53%;
            background-image: none;
        }
        to {
            background-position: 50% 53%;
            background-image: url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/backhand-index-pointing-right_1f449.png');
        }
    }
`
export const ErrorMessage = styled.p`
    margin: 0;
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
export const SuccessMessageWrapper = styled.div`
    display: flex;
    gap: 20px;
    height: 85px;
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
            height: 85px;
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