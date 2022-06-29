import React from "react"

import {
    SocialMediaInsetWrapper,
    Header,
    SocialList,
    SocialLink,
    SocialItem

} from "./socialMediaInset.style"

import { SocialMediaLink, SocialMediaIcon } from "../../global/socialMediaData"

import { motion } from "framer-motion";
import { OneItemForChild } from "../../styles/animations/framer-animations"

const SocialMediaData = [
    {
        icon: SocialMediaIcon.facebook,
        url: SocialMediaLink.facebook,
        size: '30%'
    },
    {
        icon: SocialMediaIcon.instagram,
        url: SocialMediaLink.instagram,
        size: '48%'
    },
    {
        icon: SocialMediaIcon.github,
        url: SocialMediaLink.github,
        size: '52%'
    },
    {
        icon: SocialMediaIcon.linkedin,
        url: SocialMediaLink.linkedin,
        size: '45%'
    },
    {
        icon: SocialMediaIcon.behance,
        url: SocialMediaLink.behance,
        size: '63%'
    },
]

const SocialMediaInset = () => {
    return (
        <SocialMediaInsetWrapper>
            <motion.div variants={OneItemForChild}>
                <Header>- Wpadnij na nasze media społecznościowe -</Header>
            </motion.div>
            <motion.div variants={OneItemForChild}>
                <SocialList>
                    {SocialMediaData.map((item) => {
                        return (
                            
                                <SocialLink href={item.url}>
                                    <SocialItem iconBg={item.icon} sizeBg={item.size} />
                                </SocialLink>
                        
                        )
                    })}
                </SocialList>
            </motion.div>
        </SocialMediaInsetWrapper>
    )
}

export default SocialMediaInset