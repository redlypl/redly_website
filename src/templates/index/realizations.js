import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  RealizationsWrapper,
  HeaderWrapper,
  RealizationsItemsWrapper,
  RealizationItem,
  BtnWrapper,
  ContentItemWrapper,
  ThumbnailItemWrapper,
  DecoLine,
  Number,
  HeaderWrapperItemItem,
  TitleParagraph,
  CategoryParagraph,
  DateParagraph

} from "../../styles/templates/index/realizations.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import Button from "../../components/button/button"

const Realizations = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulRealizations(
            sort: {order: DESC, fields: number}
        ) {
            edges {
                node {
                    id
                    number
                    title
                    slug
                    category
                    createdAt(formatString: "DD-MM-YYYY")
                    thumbnail {
                        resize(width: 720, height: 320, format: JPG) {
                            src
                        }
                    }
                }
            }
            distinct(field: category)
        }
    }
  `)

  return (
    <RealizationsWrapper>
      <HeaderWrapper>
        <Header
          name="Ostatnie realizacje"
          emojiBase={EmojiData.hammer}
        />
      </HeaderWrapper>
      <RealizationsItemsWrapper>
        {data.allContentfulRealizations.edges.slice(0, 3).map(({node}) => {
          return (
            <RealizationItem key={node.id} to={'/realizacje/' + node.slug}>
              <ContentItemWrapper>
                <DecoLine />
                <Number>{node.number}</Number>
                <HeaderWrapperItemItem>
                  <TitleParagraph>{node.title}</TitleParagraph>
                  <CategoryParagraph>{node.category}</CategoryParagraph>
                  <DateParagraph>{node.createdAt}</DateParagraph>
                </HeaderWrapperItemItem>
              </ContentItemWrapper>
              <ThumbnailItemWrapper
                className="hoverBg"
                background={node.thumbnail.resize.src}
              />
            </RealizationItem>
          )
        })}
      </RealizationsItemsWrapper>
      <BtnWrapper>
        <Button name="Zobacz więcej" to="/realizacje" />
      </BtnWrapper>
    </RealizationsWrapper>
  )
}

export default Realizations