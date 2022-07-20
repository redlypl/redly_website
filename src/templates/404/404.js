import React from "react"
import Button from "../../components/button/button"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import {
    HeroWrapper,
    Top,
    ContentSide,
    Header,
    B,
    SculptureSide,
    DecoSculpture,
    Sculpture,

} from "../../styles/templates/404/404.style"
import {
    HeaderAnimation,
    ButtonAnimation,
} from "../../styles/animations/framer-animations"

import AppleEmojis from "../../components/apple-emojis/apple-emojis-big";
import { EmojiData } from "../../components/apple-emojis/emojiData";


const NotFound = () => {
    return (
        <HeroWrapper>
            <Helmet>
                <title>Redly - Agencja Reklamowa</title>
            </Helmet>
            <Top>
                <ContentSide>
                    <motion.div
                        variants={HeaderAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Header>Przykro nam, ale strona której szukasz<br /><B>nie istnieje</B>&nbsp;<AppleEmojis url={EmojiData.pensiveFace} /></Header>
                    </motion.div>
                    <motion.div
                        variants={ButtonAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Button isBiggerFont name="Wróć na stronę główną" to="/" />
                    </motion.div>
                </ContentSide>
                <SculptureSide>
                    <DecoSculpture>
                        <Sculpture />
                    </DecoSculpture>
                </SculptureSide>
            </Top>
        </HeroWrapper>
    )
}

export default NotFound