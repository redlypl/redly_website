import { Link } from "gatsby"
import styled from "styled-components"

import rightArrow from "../../images/rightArrow.png"
import { theme } from "../../styles/theme"

export const ButtonWrapper = styled.div`
    background: #F0F0F0 0% 0% no-repeat padding-box;
    display: inline-flex;
    padding: 5px 10px;
    margin: 5px 0;

    :hover {
        animation-name: Shake;
        animation-duration: 0.6s;

        @keyframes Shake {
            0% {
                transform: rotate(0) scale(1);
            }
            50% {
                transform: rotate(2deg) scale(1.02);
            }
            75% {
                transform: rotate(-2deg) scale(1.02);
            }
            100% {
                transform: rotate(0) scale(1);
            }
        }
    }
    :hover > .btnHover {
        background-image: url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/backhand-index-pointing-right_1f449.png');
        animation-name: Slide;
        animation-duration: 0.5s;

        @keyframes Slide {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(50px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
            }
        }
    }
`
export const ButtonLinkElement = styled(Link)`
    text-align: left;
    font-size: ${({isBiggerFontProps}) => isBiggerFontProps ? '30px' : '20px'};
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
    color: ${theme.color.black};
    text-decoration: none;
    
    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        font: normal normal 600 22px/26px Poppins;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        font: normal normal 600 23px/28px Poppins;
    }  
`
export const ButtonHrefElement = styled.a`
    text-align: left;
    font-size: ${({isBiggerFontProps}) => isBiggerFontProps ? '30px' : '20px'};
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
    color: ${theme.color.black};
    text-decoration: none;
    
    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        font: normal normal 600 18px/26px Poppins;
    }
`
export const ArrowElement = styled.div`
    background-image: url(${ rightArrow });
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    height: 30px;
    width: 50px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        height: 25px;
        width: 45px;
    }
`