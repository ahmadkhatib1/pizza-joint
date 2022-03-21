export const ContainerVarints = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.5
        }
    }
    , exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    },
}
export const nextVarints = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring', stiffness: 120
        }
    }
}
export const cheldrenVarints = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }

}
export const buttounHover = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 15px rgb(255,255,255)',
        boxShadow: '0px 0px 7px rgb(255,255,255)',
        transition: { yoyo: Infinity }
    }
}
export const HomeVarints = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5 }
    }
    , exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}
export const backdroup = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    }
}
export const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    }
    , visible: {
        y: '200px',
        opacity: 1,
        transition: { delay: 0.5 }
    }
}
export const svgVariants = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}
export const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    }
    , visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }

    }

}