import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    GlobalNavStyle,
    NavWrapper,
    Logo,
    Navbar,
    Item,
    MobileBtn,
    MobileBtnAlign,
    Sla,
    Slb,
    Slc,    
    MobileMenu,
    MobileMenuInnerWrap
} from "./nav.style"

const navbarData = [
    {
        title: "Oferta",
        link: "/oferta"
    },
    {
        title: "Realizacje",
        link: "/realizacje"
    },
    {
        title: "Blog",
        link: "/blog"
    },
    {
        title: "O nas",
        link: "/o-nas"
    },
    {
        title: "Kontakt",
        link: "/kontakt"
    },
]

const ItemVariant = {
    initial: {
        y: 80,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.9,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
const MenuBtnVariant = {
    initial: {
        y: 80,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
        },
    },
};

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)

    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const MobileNavVariant = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.1
            }
        }
    }

    return (
        <NavWrapper id=".">
            <GlobalNavStyle setShowMenu={showMenu} />
            <Logo to="/" setShowMenu={showMenu} onClick={() => setShowMenu(!showMenu)}/>
            <Navbar>
                {navbarData.map((navbar) => {
                    return (
                        <motion.div
                            variants={ItemVariant}
                            initial="initial"
                            animate="animate"
                        >
                            <Item activeClassName="activeNav" to={navbar.link} key={navbar.title}>{navbar.title}</Item>
                        </motion.div>
                    )
                })}
            </Navbar>
            <MobileBtn setShowMenu={showMenu} onClick={() => setShowMenu(!showMenu)} href="#.">
                <motion.div
                    variants={MenuBtnVariant}
                    initial="initial"
                    animate="animate"
                    key={showMenu}
                >
                    <MobileBtnAlign>
                        <Sla setShowMenu={showMenu} />
                        <Slb setShowMenu={showMenu} />
                        <Slc setShowMenu={showMenu} />
                    </MobileBtnAlign>
                </motion.div>
            </MobileBtn>
            <MobileMenu setShowMenu={showMenu}>
                <MobileMenuInnerWrap>
                    {navbarData.map((navbar) => {
                        return (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={MobileNavVariant}
                            >
                                <Item activeClassName="activeNavMobile" isMobile to={navbar.link} key={navbar.title}>{navbar.title}</Item>
                            </motion.div>
                        )
                    })}
                </MobileMenuInnerWrap>
            </MobileMenu>
        </NavWrapper>
    )
}

export default Nav