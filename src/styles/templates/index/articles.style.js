import styled from "styled-components"
import { theme } from "../../theme"

export const ArticlesWrapper = styled.div`
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    gap: 25px;
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

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 0;

        ::before {
            display: none;
        }
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0;
    overflow: hidden;
    width: 100%;
    height: 100px;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const ArticlesItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 0 200px;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0 150px;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 0 25px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
        gap: 15px;
        padding: 0;
    }
`
export const ArticleItem = styled.div`
    background-color: #F5F5F5;
    box-shadow: 0px 3px 17px #00000015;
    border-radius: 17px;
    height: 22rem;
    width: 30rem;

    :hover {
        transform: scale(1.03);
    }

    @media (max-width: ${theme.breakpoint.desktop}) {

    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        height: 350px;
        width: 350px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        border-radius: 0;
    }
`
export const BtnWrapper = styled.div`
    padding: 20px 0;
    overflow: hidden;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const ThumbnailImg = styled.div`
    background-image: url('https://i.picsum.photos/id/48/1200/900.jpg?hmac=Izp0lfL1XBcD0i71eet_7EdWBlX-l-h6sJQimriGdbc');
    background-position: center;
    background-size: cover;
    height: 47%;
    width: 100%;
    border-radius: 17px 17px 0 0;
    opacity: 0.75;

    @media (max-width: ${theme.breakpoint.tablet}) {
        border-radius: 0;
    }
`
export const PostContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 47%;
    margin: 5px 15px;
`
export const Bar = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TagPlaceholder = styled.div`
    background-color: #EAEAEA;
    font-size: 13px;
    font-weight: 600;
    padding: 2px 13px;
    border-radius: 7px;
`
export const PublishedDate = styled.div`
    font-size: 13px;
    font-weight: 600;
    padding: 2px 13px;
`
export const Title = styled.div`
    font-size: 22px;
    line-height: 32px;
    font-weight: 600;
`
export const Description = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 60px;
    width: 100%;
`
