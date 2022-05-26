import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


import {
  ArticlesWrapper,
  HeaderWrapper,
  ArticlesItemsWrapper,
  ArticleItem,
  BtnWrapper,
  ThumbnailImg,
  PostContentWrapper,
  Bar,
  TagPlaceholder,
  PublishedDate,
  Title,
  Description,

} from "../../styles/templates/index/articles.style"
import {
  LeftSlideOneShowAnimation,
  ScaleOneShowAnimation,

} from "../../styles/animations/framer-animations"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import Button from "../../components/button/button"

const test_data = [
  {
    id: 1,
    name: 'test1'
  },
  {
    id: 2,
    name: 'test2'
  }
]

const Articles = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <ArticlesWrapper>
      <HeaderWrapper>
        <motion.div
          ref={ref}
          variants={LeftSlideOneShowAnimation}
          initial="hidden"
          animate={control}
        >
          <Header
            name="Najnowsze artykuły"
            emojiBase={EmojiData.books}
          />
        </motion.div>
      </HeaderWrapper>
      <ArticlesItemsWrapper>
        {test_data.map((data) => {
          return (
            <motion.div
              ref={ref}
              variants={ScaleOneShowAnimation}
              initial="hidden"
              animate={control}
            >
              <ArticleItem key={data.id}>
                <ThumbnailImg />
                <PostContentWrapper>
                  <Bar>
                    <TagPlaceholder>Poradniki</TagPlaceholder>
                    <PublishedDate>26.02.2022</PublishedDate>
                  </Bar>
                  <Title>Najważniejsze narzędzia dla projektanta</Title>
                  <Description>Z tego artykułu dowiesz się jakie niezbędne narzędzi sdlfjhsodfdo hsfhsfioushdfiuhsdf uishdf sdbfsdh fsdh fhs fhsd fs df sdfh sdhf hsdfha posiada każdy projektant oraz jak z nich profesjonalnie korzystać.</Description>
                </PostContentWrapper>
              </ArticleItem>
            </motion.div>
          )
        })}
      </ArticlesItemsWrapper>
      <BtnWrapper>
        <motion.div
          ref={ref}
          variants={LeftSlideOneShowAnimation}
          initial="hidden"
          animate={control}
        >
          <Button name="Zobacz więcej" to="/blog" />
        </motion.div>
      </BtnWrapper>
    </ArticlesWrapper>
  )
}

export default Articles