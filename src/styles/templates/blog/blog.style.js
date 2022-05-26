import styled from "styled-components"
import { theme } from "../../theme"

export const ArticlesWrapper = styled.div`
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: ${theme.breakpoint.desktop}) {
        gap: 5px;
        padding: 25px 100px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        padding: 25px 50px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 25px 0;
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
        padding: 25px 0;
    }
`
export const HeaderWrapper = styled.div`
    padding: 25px 0;
    margin-bottom: 40px;

    @media (max-width: ${ theme.breakpoint.tablet }) {
        display: flex;
        justify-content: center;
    }
`
export const ArticlesItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 25px;
    padding: 0 130px;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoint.largeDesktop}) {
        padding: 0;
    }
    @media (max-width: ${theme.breakpoint.desktop}) {
        padding: 0;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        flex-direction: column;
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
        width: 390px;
        height: 350px;
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
        height: 350px;
        width: 310px;
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
        width: 100%;
        border-radius: 0;
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
export const SocialMediaWrapper = styled.div`
    background-color: burlywood;
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`