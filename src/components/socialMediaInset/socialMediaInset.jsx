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
        size: '30%',
        aria: 'Facebook'
    },
    {
        icon: SocialMediaIcon.instagram,
        url: SocialMediaLink.instagram,
        size: '48%',
        aria: 'Instagram'
    },
    {
        icon: SocialMediaIcon.github,
        url: SocialMediaLink.github,
        size: '52%',
        aria: 'Github'
    },
    {
        icon: SocialMediaIcon.linkedin,
        url: SocialMediaLink.linkedin,
        size: '45%',
        aria: 'Linkedin'
    },
    {
        icon: SocialMediaIcon.behance,
        url: SocialMediaLink.behance,
        size: '63%',
        aria: 'Behance'
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
                            
                                <SocialLink aria-label={item.aria} href={item.url}>
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