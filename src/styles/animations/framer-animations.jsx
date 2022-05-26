export const HeaderAnimation = {
    initial: {
        x: -700,
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.7,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
export const UnderHeaderAnimation = {
    initial: {
        x: -700,
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.9,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
export const ButtonAnimation = {
    initial: {
        x: -700,
    },
    animate: {
        x: 0,
        transition: {
            duration: 1,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
export const SculptureAnimation = {
    initial: {
        x: 700,
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.8,
            type: "tween",
            ease: "easeInOut",
        },
    },
};
export const LeftSlideOneShowAnimation = {
    hidden: {
        x: -500,
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
        }
    }
}
export const ScaleOneShowAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeInOut",
        }
    }
}