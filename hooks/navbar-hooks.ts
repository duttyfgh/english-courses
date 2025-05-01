'use client'

import { Variants } from "motion/react"
import { useRef, useState } from "react"

interface useNavbarReturns {
    closeNavBar: () => void
    openNavBar: () => void
    isNavBar: boolean
    animation: Variants
}

const appearingAnimation: Variants = {
    hidden: {
        right: 0,
        opacity: 0,
        width: "0px"
    },
    visible: {
        right: 0,
        opacity: 1,
        width: "200px",
        transition: {
            duration: .2,
            ease: 'easeOut',
        },
    }
}

const disappearingAnimation: Variants = {
    hidden: {
        right: 0,
        opacity: 1,
        width: "200px",
        transition: {
            duration: .2,
            ease: 'easeInOut',
        }
    },
    visible: {
        right: 0,
        opacity: 0,
        width: "0px"
    },
}

export const headerItems = [
    {
        title: 'Навчання',
        href: '#education'
    },
    {
        title: 'Відгуки',
        href: '/feedback'
    },
    {
        title: `Зв'язок`,
        href: '#contacts'
    },
    {
        title: 'Питання',
        href: '/faq'
    }
]

export const useNavbar = (): useNavbarReturns => {
    const [isNavBar, setIsNavBar] = useState<boolean>(false)
    const [animation, setAnimation] = useState<Variants>(appearingAnimation)

    const navBarTimerRef = useRef<NodeJS.Timeout | null>(null)

    const openNavBar = () => {
        if (navBarTimerRef.current) {
            clearTimeout(navBarTimerRef.current)
        }

        setAnimation(appearingAnimation)

        navBarTimerRef.current = setTimeout(() => {
            setIsNavBar(true)
        }, 50)
    }

    const closeNavBar = () => {
        if (navBarTimerRef.current) {
            clearTimeout(navBarTimerRef.current)
        }

        setAnimation(disappearingAnimation)

        navBarTimerRef.current = setTimeout(() => {
            setIsNavBar(false)
        }, 50)
    }

    return { closeNavBar, openNavBar, isNavBar, animation }

}